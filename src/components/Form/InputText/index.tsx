import React from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

import * as S from './styles';

interface Props extends TextInputProps {
  iconName: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const InputText = ({ iconName, containerStyle = {}, ...rest }: Props) => {
  return (
    <S.Container style={containerStyle}>
      <S.Icon name={iconName} size={20} color="#7A7A80" />
      <S.Separator />
      <S.Input {...rest} />
    </S.Container>
  );
};

export default InputText;
