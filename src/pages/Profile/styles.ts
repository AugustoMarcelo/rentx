import Constants from 'expo-constants';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #1b1b1f;
  height: ${207 - Constants.statusBarHeight}px;
  padding: 24px 24px 0px;
`;

export const Title = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 25px;
  line-height: 27px;
  color: #FFFFFF;
`;

export const Avatar = styled.Image`
  height: 160px;
  width: 160px;
  border-radius: 80px;
  margin-top: -80px;
  align-self: center;
`;

export const Name = styled.Text`
  align-self: center;
  width: 177px;
  margin-top: 16px;
  font-family: 'Archivo_600SemiBold';
  font-size: 30px;
  line-height: 33px;
  color: #3D3D4D;
  text-align: center;
`;

export const Content = styled.View`
  margin-top: 34px;
  padding: 16px;
`;

export const Row = styled.View<{ borderBottom?: boolean, marginBottom: number }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};

  ${({ borderBottom }) => borderBottom && css`
    padding-bottom: 19px;
    border-bottom-width: 1px;
    border-bottom-color: #E6E6F0;
  `}
`;

export const Label = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 15px;
  line-height: 18.5px;
  color: #7A7A80;
`;

export const Value = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 15px;
  line-height: 16px;
  color: #47474D;
`;