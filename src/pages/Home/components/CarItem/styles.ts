import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #F4F5F6;
  padding: 24px;
  border-bottom-width: 1px;
  border-bottom-color: #EBEBF0;
  margin-bottom: 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const ModelContainer = styled.View``;

export const Brand = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 10px;
  line-height: 11px;
  text-transform: uppercase;
  color: #AEAEB3;
  margin-bottom: 4px;
`;

export const ModelName = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 20px;
  line-height: 22px;
  color: #47474D;
`;

export const PriceContainer = styled.View``;

export const Label = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 10px;
  line-height: 11px;
  text-transform: uppercase;
  color: #AEAEB3;
  margin-bottom: 4px;
`;

export const PriceText = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 20px;
  line-height: 22px;
  color: #DC1637;
`;

export const CarImage = styled.Image`
  height: 119px;
`;

export const Dots = styled.View`
  margin-top: 14px;
  flex-direction: row;
`;

export const Dot = styled.View<{ active: boolean }>`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  margin-left: 8px;
  background-color: ${({ active }) => active ? '#47474D' : '#AEAEB3'};
`; 