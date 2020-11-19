import styled from 'styled-components/native';

interface Props {
  active: boolean;
}

export const Container = styled.View`
  margin-bottom: 16px;
`;

export const VehicleInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #F4F5F6;
  padding: 24px;
  border-bottom-width: 1px;
  border-bottom-color: #EBEBF0;
`;

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
  font-size: 15px;
  line-height: 16px;
  color: #47474D;
`;

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
  width: 160px;
`;

export const PeriodContainer = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
  background-color: ${({ active }) => active ? '#F4F5F6' : '#DAF3E5'};
  padding: 12px 24px;
`;

export const PeriodActiveText = styled.Text`
  font-family: 'Archivo_500Medium';
  align-self: center;
  font-size: 15px;
  line-height: 16px;
  color: #03B352;
  margin: auto;
`;

export const PeriodLabel = styled.Text`
  font-family: 'Archivo_500Medium';
  text-transform: uppercase;
  font-size: 10px;
  line-height: 11px;
  color: #AEAEB3;
`;

export const PeriodInactiveText = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 11px;
  line-height: 14px;
  color: #47474D;
`;
