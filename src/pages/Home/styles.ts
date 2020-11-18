import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

import { ICar } from '.';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  background-color: #1b1b1f;
  height: ${119 - Constants.statusBarHeight}px;
  padding: 24px;
`;

export const ListHeading = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const FilterContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ResultText = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 25px;
  line-height: 27.5px;
  color: #47474d;
`;

export const CarCountText = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 13px;
  color: #aeaeb3;
  margin-right: 26px;
`;

export const CarListScroll = styled(FlatList as new () => FlatList<ICar>).attrs(
  {
    contentContainerStyle: {
      paddingHorizontal: 24,
    },
  }
)``;

export const BottomSheetHeader = styled.View`
  align-items: center;
  padding: 16px 0;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin-bottom: -1px;
`;

export const BottomSheetPicker = styled.View`
  width: 48px;
  height: 4px;
  background-color: #ebebf0;
  border-radius: 100px;
`;

export const FilterTitle = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 25px;
  color: #47474d;
  line-height: 27px;
`;

export const ClearFilterText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;
  line-height: 18px;
  color: #aeaeb3;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #ebebf0;
  padding-bottom: 24px;
`;

export const Label = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 20px;
  line-height: 21.76px;
  color: #47474d;
`;

export const ValueRangeText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;
  line-height: 18.5px;
  color: #dc1637;
`;

export const ButtonLogin = styled(RectButton)`
  height: 56px;
  margin-top: 40px;
  background-color: #DC1637;
  align-items: center;
  justify-content: center;
`;

export const ButtonLoginText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;
  line-height: 18px;
  color: #FFF;
`;

export const Shadow = styled.View.attrs({
  pointerEvents: 'none',
})`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  z-index: 10;
  background-color: #000;
`;
