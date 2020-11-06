import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
  background-color: #1b1b1f;
`;

export const Logo = styled.Image`
  margin-bottom: 100px;
`;

export const WelcomeText = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 40px;
  line-height: 43px;
  color: #f4f5f6;
  text-align: center;
`;

export const QuestionText = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 15px;
  line-height: 25px;
  color: #dedee3;
  margin-top: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 137px;
  margin-bottom: 43px;
  padding: 0 24px;
`;

const Button = styled(RectButton)`
  height: 56px;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter_500Medium';
  color: #e1e1e6;
  font-size: 15px;
`;

export const ButtonLogin = styled(Button)`
  background-color: #dc1637;
  margin-right: 16px;
`;

export const ButtonRegister = styled(Button)`
  background-color: #29292e;
`;

export const BackButtonText = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 13px;
  color: #7a7a80;
`;
