import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Moment } from 'moment';
import moment from 'moment';
import 'moment/locale/pt-br';

import ReadOnlyDate from '../../components/ReadOnlyDate';
import Values from './utils/values';
import Arrow from '../../images/arrow.png';

import * as S from './styles';

moment.locale('pt-br');

export default function ChooseData() {
  const [selectedDate, setSelectedDate] = useState({
    start: '',
    end: '',
  });
  function renderCustomArrow(direction: 'left' | 'right') {
    return <Feather name={`chevron-${direction}`} color="#7A7A80" size={20} />;
  }

  function handleOnDateChange(date: Moment, type: 'START_DATE' | 'END_DATE') {
    switch (type) {
      case 'START_DATE': {
        setSelectedDate({
          ...selectedDate,
          start: moment(date).format('DD MMMM YYYY'),
        });
        break;
      }
      default: {
        setSelectedDate({
          ...selectedDate,
          end: moment(date).format('DD MMMM YYYY'),
        });
      }
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Escolha a{'\n'}data e encontre{'\n'}um carro.
        </S.Title>

        <S.DateRangeContainer>
          <ReadOnlyDate label="De" date={selectedDate.start} />
          <Image source={Arrow} />
          <ReadOnlyDate label="Até" date={selectedDate.end || selectedDate.start} />
        </S.DateRangeContainer>
      </S.Header>

      <S.CalendarContainer>
        <CalendarPicker
          onDateChange={handleOnDateChange}
          weekdays={Values.weekdays}
          months={Values.months}
          startFromMonday
          allowRangeSelection
          textStyle={{
            fontFamily: 'Inter_400Regular',
            fontSize: 15,
            color: '#47474d',
          }}
          nextComponent={renderCustomArrow('right')}
          previousComponent={renderCustomArrow('left')}
          customDayHeaderStyles={() => {
            return {
              textStyle: {
                fontFamily: 'Archivo_600SemiBold',
                fontSize: 10,
                color: '#AEAEB3'
              }
            }
          }}
          monthYearHeaderWrapperStyle={{
            alignItems: 'flex-start'
          }}
          showDayStragglers
          dayShape="square"
          todayBackgroundColor="#fff"
          todayTextStyle={{ fontWeight: "bold" }}
          selectedDayTextColor="#fff"
          dayLabelsWrapper={{
            borderTopWidth: 0,
            paddingBottom: 15,
            borderBottomColor: '#EBEBF0',
            marginBottom: 15
          }}
          selectedRangeStartStyle={{
            backgroundColor: '#DC1637',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          selectedRangeEndStyle={{
            backgroundColor: '#DC1637',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
          selectedRangeStyle={{
            backgroundColor: '#FDEDEF',
          }}
        />
        
        <S.ConfirmButton enabled={!!selectedDate.start}>
          <S.ConfirmButtonText>Confirmar</S.ConfirmButtonText>
        </S.ConfirmButton>
      </S.CalendarContainer>
    </S.Container>
  );
}
