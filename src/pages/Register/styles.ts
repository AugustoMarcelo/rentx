import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export const SwipeWrapper = styled(Swiper).attrs({
  dotStyle: {
    borderRadius: 2,
    width: 4,
    height: 4,
  },
  activeDotStyle: {
    borderRadius: 2,
    width: 4,
    height: 4,
  },
  activeDotColor: '#47474D',
  paginationStyle: {
    position: 'absolute',
    top: 16 + Constants.statusBarHeight,
    right: 32,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
})``;


export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  padding: 0 32px 32px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 30px;
  z-index: 10;
`;

export const Title = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 40px;
  line-height: 43px;
  color: #3D3D4D;
  margin: 140px 0 24px;
`;

export const Subtitle = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 15px;
  line-height: 25px;
  color: #7A7A80;
  margin-bottom: 110px;
`;

export const StepTitle = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 20px;
  color: #3D3D4D;
  margin-bottom: 24px;
`;

export const ButtonLogin = styled(RectButton)`
  height: 56px;
  margin-top: 32px;
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