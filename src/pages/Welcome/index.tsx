import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import UnionLogo from '../../images/logo-union.png';

import * as S from './styles';

export default function Welcome() {
  return (
    <S.Container>
      <StatusBar style="light" />

      <S.Logo source={UnionLogo} />

      <S.WelcomeText>Seja {'\n'} Bem-vindo</S.WelcomeText>
      <S.QuestionText>O que você deseja fazer?</S.QuestionText>

      <S.ButtonsContainer>
        <S.ButtonLogin>
          <S.ButtonText>Login</S.ButtonText>
        </S.ButtonLogin>
        <S.ButtonRegister>
          <S.ButtonText>Cadastro</S.ButtonText>
        </S.ButtonRegister>
      </S.ButtonsContainer>

      <TouchableOpacity>
        <S.BackButtonText>Voltar</S.BackButtonText>
      </TouchableOpacity>
    </S.Container>
  );
}
