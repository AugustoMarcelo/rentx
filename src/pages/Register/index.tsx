import React, { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

import * as S from './styles';
import InputText from '../../components/Form/InputText';
import { StatusBar } from 'expo-status-bar';

export default function Register() {
  const swipeRef = useRef<Swiper>(null);
  const scrollRef = useRef<ScrollView>(null);
  const [marginActive, setMarginActive] = useState(false);
  const { navigate, goBack } = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        scrollRef.current?.scrollToEnd({ animated: true });
        setMarginActive(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        scrollRef.current?.scrollTo({ y: 0 });
        setMarginActive(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  function goToNextSlide() {
    swipeRef.current?.scrollBy(1);
  }

  function goBackToPreviousSlide() {
    swipeRef.current?.scrollBy(-1);
  }

  function handleSubmit() {
    navigate('RegisterSuccessful');
  }

  return (
    <>
      <StatusBar style="dark" />
      <S.SwipeWrapper ref={swipeRef} loop={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flexGrow: 1 }}
          enabled
        >
          <S.BackButton onPress={goBack}>
            <Feather name="chevron-left" color="#AEAEB3" size={20} />
          </S.BackButton>
          <ScrollView
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <S.Container>
              <S.Title>Crie {'\n'}sua conta</S.Title>
              <S.Subtitle
                style={marginActive && { marginTop: 100, marginBottom: 50 }}
              >
                Faça seu cadastro de{'\n'}forma rápida e fácil.
              </S.Subtitle>

              <S.StepTitle>01. Dados</S.StepTitle>

              <InputText
                iconName="user"
                placeholder="Nome"
                containerStyle={{ marginBottom: 8 }}
              />

              <InputText
                iconName="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCompleteType="off"
              />

              <S.ButtonLogin onPress={goToNextSlide}>
                <S.ButtonLoginText>Próximo</S.ButtonLoginText>
              </S.ButtonLogin>
            </S.Container>
          </ScrollView>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flexGrow: 1 }}
          enabled
        >
          <S.BackButton onPress={goBackToPreviousSlide}>
            <Feather name="chevron-left" color="#AEAEB3" size={20} />
          </S.BackButton>
          <ScrollView
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <S.Container>
              <S.Title>Crie {'\n'}sua conta</S.Title>
              <S.Subtitle
                style={marginActive && { marginTop: 100, marginBottom: 50 }}
              >
                Faça seu cadastro de{'\n'}forma rápida e fácil.
              </S.Subtitle>

              <S.StepTitle>02. Senha</S.StepTitle>

              <InputText
                iconName="lock"
                secureTextEntry
                placeholder="Senha"
                containerStyle={{ marginBottom: 8 }}
              />

              <InputText
                iconName="lock"
                secureTextEntry
                placeholder="Repetir senha"
              />

              <S.ButtonLogin onPress={handleSubmit}>
                <S.ButtonLoginText>Cadastrar</S.ButtonLoginText>
              </S.ButtonLogin>
            </S.Container>
          </ScrollView>
        </KeyboardAvoidingView>
      </S.SwipeWrapper>
    </>
  );
}
