import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: stretch;
  height: 56px;
  background-color: #F2F2FA;
`;

export const Icon = styled(Feather)`
  padding: 18px;
`;

export const Separator = styled.View`
  height: 100%;
  width: 2px;
  background-color: #FFF;
`;

export const Input = styled.TextInput`
  padding: 18px;
  font-family: 'Inter_400Regular';
  font-size: 15px;
  color: #A3A3B3;
  width: 80%;
`;