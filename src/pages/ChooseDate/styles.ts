import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const Header = styled.View`
  padding: 24px;
  justify-content: flex-end;
  background-color: #1B1B1F;
  height: 252px;
`;

export const Title = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 30px;
  line-height: 34px;
  color: #FFF;
  margin-bottom: 40px;
`;

export const DateRangeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarContainer = styled.View`
  flex: 1;
  padding: 24px;
`;

export const ConfirmButton = styled(RectButton)`
  margin-top: 16px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: #DC1637;

  ${(props) => !props.enabled && `opacity: 0.5;`}
`;

export const ConfirmButtonText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;
  color: #FFF;
`;