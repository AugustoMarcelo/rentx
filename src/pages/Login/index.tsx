import React, { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import InputText from '../../components/Form/InputText';

import * as S from './styles';
import Checkbox from '../../components/Form/Checkbox';

export default function Login() {
  const scrollRef = useRef<ScrollView>(null);
  const [marginActive, setMarginActive] = useState(false);
  const [remember, setRemember] = useState(false);

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

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flexGrow: 1 }}
        enabled
      >
        <S.BackButton>
          <Feather name="chevron-left" color="#AEAEB3" size={20} />
        </S.BackButton>
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <S.Container>
            <S.Title>Estamos {'\n'}quase lá.</S.Title>
            <S.Subtitle
              style={marginActive && { marginTop: 100, marginBottom: 50 }}
            >
              Faça seu login para começar{'\n'}uma experiência incrível.
            </S.Subtitle>

            <InputText
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCompleteType="off"
              containerStyle={{ marginBottom: 8 }}
            />

            <InputText iconName="lock" secureTextEntry placeholder="Senha" />

            <S.Row>
              <Checkbox
                label="Lembrar-me"
                value={remember}
                onValueChange={setRemember}
              />

              <TouchableOpacity>
                <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
              </TouchableOpacity>
            </S.Row>

            <S.ButtonLogin>
              <S.ButtonLoginText>Login</S.ButtonLoginText>
            </S.ButtonLogin>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
