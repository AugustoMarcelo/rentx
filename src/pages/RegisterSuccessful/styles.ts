import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #1B1B1F;
`;

export const LogoBackground = styled.Image`
  margin-bottom: 52px;
`;

export const Done = styled.View`
  border: 6px solid #29292E;
  border-radius: 4px;
  height: 66px;
  width: 60px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 30px;
  color: #E1E1E6;
  margin: 46px 0 16px;
`;

export const Subtitle = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 15px;
  line-height: 25px;
  color: #A8A8B3;
  text-align: center;
`;

export const ButtonOk = styled(RectButton)`
  height: 56px;
  width: 80px;
  margin-top: 80px;
  background-color: #29292E;
  align-items: center;
  justify-content: center;
`;

export const ButtonOkText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;
  line-height: 18px;
  color: #FFF;
`;