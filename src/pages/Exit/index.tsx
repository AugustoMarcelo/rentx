import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import UnionBackground from '../../images/union-background.png';

import * as S from './styles';

export default function Exit() {
  const { goBack, navigate } = useNavigation();

  return (
    <>
      <StatusBar style="light" />
      <S.Container>
        <S.LogoBackground source={UnionBackground} />

        <S.Done>
          <FontAwesome name="close" size={32} color="#DC1637" />
        </S.Done>
        <S.Title>Sair do RENTX</S.Title>
        <S.Subtitle>Tem certeza que quer{'\n'}fazer isso?</S.Subtitle>

        <S.ButtonsContainer>
          <S.Button
            onPress={goBack}
            style={{ backgroundColor: '#dc1637', marginRight: 16 }}
          >
            <S.ButtonText>Não</S.ButtonText>
          </S.Button>
          <S.Button onPress={() => navigate('Login')}>
            <S.ButtonText>Sim</S.ButtonText>
          </S.Button>
        </S.ButtonsContainer>
      </S.Container>
    </>
  );
}
