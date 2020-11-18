import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface Props {
  selected: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #F4F5F6;
  padding: 4px;
`;

export const Item = styled(RectButton)<Props>`
  padding: 15px 38px;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected }) => selected ? '#fff' : '#F4F5F6'};
`;

export const Label = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;
  line-height: 18px;
  color: #47474D;
`;