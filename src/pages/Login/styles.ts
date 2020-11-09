import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  padding: 0 32px 32px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 32px 0;
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

export const ForgotPasswordText = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 13px;
  line-height: 15px;
  color: #737380;
`;

export const CheckboxContainer = styled.TouchableOpacity`
  flex-direction: row;
`;

export const ButtonLogin = styled(RectButton)`
  height: 56px;
  margin-bottom: 32px;
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