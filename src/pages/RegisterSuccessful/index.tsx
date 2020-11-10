import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import UnionBackground from '../../images/union-background.png';

import * as S from './styles';

export default function RegisterSuccessful() {
  const { navigate } = useNavigation();

  function goToLogin() {
    navigate('Login');
  }

  return (
    <>
      <StatusBar style="light" />
      <S.Container>
        <S.LogoBackground source={UnionBackground} />

        <S.Done>
          <FontAwesome name="check" size={32} color="#03B252" />
        </S.Done>
        <S.Title>Conta criada!</S.Title>
        <S.Subtitle>Agora é só fazer login{"\n"}e aproveitar.</S.Subtitle>
        
        <S.ButtonOk onPress={goToLogin}>
          <S.ButtonOkText>Ok</S.ButtonOkText>
        </S.ButtonOk>
      </S.Container>
    </>
  );
}
