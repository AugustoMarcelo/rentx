import React, { useState } from 'react';
import { CheckBoxProps, StyleProp, ViewStyle } from 'react-native';

import { Container, BoxContainer, Label } from './styles';

interface Props extends CheckBoxProps {
  checkboxStyle?: StyleProp<ViewStyle>;
  label?: string;
}

const Checkbox = ({ label, onValueChange }: Props) => {
  const [checked, setChecked] = useState(false);

  function handleToggleCheck() {
    setChecked(!checked);
    onValueChange && onValueChange(!checked);
  }

  return (
    <Container onPress={handleToggleCheck}>
      <>
        <BoxContainer isChecked={checked} />

        {label && <Label>{label}</Label>}
      </>
    </Container>
  );
};

export default Checkbox;