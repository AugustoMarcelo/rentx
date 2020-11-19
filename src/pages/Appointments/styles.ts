import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { FlatList } from 'react-native';
import { IAppointment } from '.';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #1b1b1f;
  height: ${119 - Constants.statusBarHeight}px;
  padding: 24px;
`;

export const Title = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 25px;
  line-height: 27.5px;
  color: #fff;
`;

export const AppointmentsCountText = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 13px;
  color: #7A7A80;
`;

export const AppointmentsListSroll = styled(FlatList as new () => FlatList<IAppointment>).attrs(
  {
    contentContainerStyle: {
      padding: 16,
    },
  }
)``;