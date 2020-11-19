import React, { useMemo } from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

import { IAppointment } from '../../';
import getFuelIcon from '../../../../utils/getFuelIcon';

import * as S from './styles';

export default function AppointmentItem({
  car,
  start,
  end,
}: IAppointment) {
  const isAfterToday = useMemo(() => {
    return moment(end).isAfter(new Date());
  }, [end]);

  const dateStartFormatted = useMemo(() => {
    return moment(start).format('DD MMMM YYYY');
  }, [start]);

  const dateEndFormatted = useMemo(() => {
    return moment(end).format('DD MMMM YYYY');
  }, [end]);

  const periodInDays = useMemo(() => {
    const days = moment(end).diff(moment(start), 'days');
    const daysText = days > 1 && days !== 0 ? 'dias' : 'dia';

    return `Por ${days} ${daysText}`;
  }, [start, end]);

  return (
    <S.Container>
      <S.VehicleInfo>
        <View>
          <S.Brand>{car.model}</S.Brand>
          <S.ModelName>{car.model}</S.ModelName>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              marginTop: 16,
            }}
          >
            <View style={{ marginRight: 12 }}>
              <S.Label>{periodInDays}</S.Label>
              <S.PriceText>R$ {car.daily}</S.PriceText>
            </View>
            {getFuelIcon(car.fuel)}
          </View>
        </View>
        <S.CarImage source={{ uri: car.url }} resizeMode="contain" />
      </S.VehicleInfo>

      <S.PeriodContainer active>
        {isAfterToday ? (
          <S.PeriodActiveText>Utilizando até {dateEndFormatted}</S.PeriodActiveText>
        ) : (
          <>
            <S.PeriodLabel>Período</S.PeriodLabel>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <S.PeriodInactiveText>{dateStartFormatted}</S.PeriodInactiveText>
              <AntDesign
                name="arrowright"
                size={16}
                color="#AEAEB3"
                style={{ marginHorizontal: 5 }}
              />
              <S.PeriodInactiveText>{dateEndFormatted}</S.PeriodInactiveText>
            </View>
          </>
        )}
      </S.PeriodContainer>
    </S.Container>
  );
}
