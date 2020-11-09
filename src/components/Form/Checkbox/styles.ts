import styled, { css } from 'styled-components/native';

interface CheckboxProps {
  isChecked: boolean;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const BoxContainer = styled.View<CheckboxProps>`
  height: 20px;
  width: 20px;
  background-color: #EBEBF0;
  border-width: 6px;
  border-color: #EBEBF0;
  align-items: center;
  justify-content: center;
  ${({ isChecked }) =>
    isChecked &&
    css`
      border-color: #1B1B1F;
      border-width: 6px;
    `}
`;

export const Label = styled.Text`
  margin-left: 12px;
  font-family: 'Inter_400Regular';
  font-size: 13px;
  color: #737380;
`;