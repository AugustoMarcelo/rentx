import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import RangeSlider from 'rn-range-slider';

import api from '../../services/api';

import ReadOnlyDate from '../../components/ReadOnlyDate';
import CarItem from '../../components/CarItem';
import { SlidersIcon } from '../../images/icons';
import {
  SliderThumb,
  SliderRail,
  SliderRailSelected,
} from './components/Slider';
import FuelSelector from './components/FuelSelector';
import TransmissionSelector from './components/TransmissionSelector';

import { useRecoilState } from 'recoil';
import { bottomSheetOpened } from '../../atoms';

import * as S from './styles';

export interface ICar {
  brand: string;
  model: string;
  url: string;
  daily: number;
  fuel: 'gasoline' | 'alcohol' | 'energy';
}

interface DateRangeRouteParams {
  start: string;
  end: string;
}

export default function Home() {
  const [openSheet, setOpenSheet] = useRecoilState(bottomSheetOpened);

  const [cars, setCars] = useState<ICar[]>([]);
  const [range, setRange] = useState({ low: 0, high: 500 });
  

  const route = useRoute();
  const params = route.params as DateRangeRouteParams;

  const snapPoints = useMemo(() => ['0%', '25%', '50%', '75%'], []);
  const sheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    async function loadCars() {
      const response = await api.get('cars');
      setCars(response.data);
    }

    loadCars();
  }, []);

  function handleOpenBottomSheet() {
    if (openSheet) {
      setOpenSheet(false);
      sheetRef.current?.snapTo(0);
    } else {
      setOpenSheet(true);
      sheetRef.current?.snapTo(3);
    }
  }

  function handleConfirmFilters() {
    setOpenSheet(false);
    sheetRef.current?.snapTo(0);
  }

  const handleValueChange = useCallback((low, high) => {
    setRange({
      low,
      high,
    });
  }, []);

  return (
    <>
      <StatusBar translucent={false} backgroundColor="#1b1b1f" style="light" />
      <S.Container>
        <S.Header>
          <ReadOnlyDate label="De" date={params?.start || '17 Novembro 2020'} />
          <Feather name="chevron-down" size={20} color="#7A7A80" />
          <ReadOnlyDate label="Até" date={params?.end || '17 Novembro 2020'} />
        </S.Header>

        <S.ListHeading>
          <S.ResultText>Resultados</S.ResultText>
          <S.FilterContainer>
            <S.CarCountText>{cars.length} carros</S.CarCountText>
            <TouchableOpacity onPress={handleOpenBottomSheet}>
              <SlidersIcon height={24} width={24} fill="#47474D" />
            </TouchableOpacity>
          </S.FilterContainer>
        </S.ListHeading>

        <S.CarListScroll
          data={cars}
          keyExtractor={(car) => car.url}
          renderItem={({ item }: { item: ICar }) => <CarItem {...item} />}
        />
      </S.Container>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onCloseEnd={() => setOpenSheet(false)}
        renderHeader={() => (
          <S.BottomSheetHeader>
            <S.BottomSheetPicker />
          </S.BottomSheetHeader>
        )}
        renderContent={() => (
          <View style={{ backgroundColor: '#fff', height: 637, padding: 24 }}>
            <S.Row>
              <S.FilterTitle>Filtro</S.FilterTitle>
              <TouchableOpacity>
                <S.ClearFilterText>Limpar todos</S.ClearFilterText>
              </TouchableOpacity>
            </S.Row>

            <S.Row
              style={{ paddingBottom: 0, borderBottomWidth: 0, marginTop: 40 }}
            >
              <S.Label>Preço ao dia</S.Label>
              <S.ValueRangeText>{`R$ ${range.low} - R$ ${range.high}`}</S.ValueRangeText>
            </S.Row>

            <RangeSlider
              style={{ marginTop: 30 }}
              min={0}
              max={500}
              low={range.low}
              high={range.high}
              step={10}
              renderThumb={() => <SliderThumb />}
              renderRail={() => <SliderRail />}
              renderRailSelected={() => <SliderRailSelected />}
              onValueChanged={handleValueChange}
            />

            <S.Label style={{ marginTop: 40, marginBottom: 24 }}>
              Combustível
            </S.Label>

            <FuelSelector />

            <S.Label style={{ marginTop: 40, marginBottom: 24 }}>
              Transmissão
            </S.Label>

            <TransmissionSelector />

            <S.ButtonLogin onPress={handleConfirmFilters}>
              <S.ButtonLoginText>Confirmar</S.ButtonLoginText>
            </S.ButtonLogin>
          </View>
        )}
      />
      {openSheet && <S.Shadow />}
    </>
  );
}
