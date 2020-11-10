import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import UnionLogo from '../../images/logo-union.png';

import * as S from './styles';

export default function Welcome() {
  const { navigate, goBack } = useNavigation();

  function goToLogin() {
    navigate('Login');
  }

  function goToRegister() {
    navigate('Register');
  }

  return (
    <>
      <StatusBar style="light" />
      <S.Container>
        <S.Logo source={UnionLogo} />

        <S.WelcomeText>Seja {'\n'} Bem-vindo</S.WelcomeText>
        <S.QuestionText>O que você deseja fazer?</S.QuestionText>

        <S.ButtonsContainer>
          <S.ButtonLogin onPress={goToLogin}>
            <S.ButtonText>Login</S.ButtonText>
          </S.ButtonLogin>
          <S.ButtonRegister onPress={goToRegister}>
            <S.ButtonText>Cadastro</S.ButtonText>
          </S.ButtonRegister>
        </S.ButtonsContainer>

        <TouchableOpacity onPress={goBack}>
          <S.BackButtonText>Voltar</S.BackButtonText>
        </TouchableOpacity>
      </S.Container>
    </>
  );
}
