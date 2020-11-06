import React, { useRef, useEffect, useState } from 'react';
import { Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { StatusBar } from 'expo-status-bar';

import UnionLogo from '../../images/logo-union.png';
import Logo from '../../images/logo.png';
import CalendarIcon from '../../images/calendar.png';
import CarIcon from '../../images/car.png';

import * as S from './styles';

export default function Onboarding() {
  const swipeRef = useRef<Swiper>(null);
  const { navigate } = useNavigation();

  const [opacity] = useState(new Animated.Value(0));
  const [displayFirstLogo, setDisplayFirstLogo] = useState(true);
  const [displaySecondLogo, setDisplaySecondLogo] = useState(false);
  const [opacitySecondLogo] = useState(new Animated.Value(0));
  const [animation] = useState(new Animated.Value(0));

  const backgroundInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(27,27,31)', 'rgb(255,255,255)'],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setDisplayFirstLogo(false);
      setDisplaySecondLogo(true);

      Animated.sequence([
        Animated.timing(opacitySecondLogo, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(opacitySecondLogo, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setDisplaySecondLogo(false);
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }).start();
      });
    });
  }, []);

  function goToNextSlide() {
    swipeRef.current?.scrollBy(1);
  }

  function handleNavigateToWelcomePage() {
    navigate('Welcome');
  }

  return (
    <S.AnimatedView style={{ backgroundColor: backgroundInterpolation }}>
      {displayFirstLogo && (
        <Animated.Image style={{ opacity }} source={UnionLogo} />
      )}

      {displaySecondLogo && (
        <Animated.Image style={{ opacity: opacitySecondLogo }} source={Logo} />
      )}

      {!displayFirstLogo && !displaySecondLogo && (
        <>
          <StatusBar style="dark" />
          <S.SwipeWrapper ref={swipeRef} loop={false}>
            <S.SwipePage>
              <S.Header>
                <Image source={CalendarIcon} />
                <S.PageNumber>01</S.PageNumber>
              </S.Header>
              <S.Content>
                <S.Title>Primeiro, escolha a data</S.Title>
                <S.Description>
                  Você é quem define um período, e nós mostraremos os carros
                  disponíveis.
                </S.Description>
              </S.Content>
              <S.NextSlideButton onPress={goToNextSlide}>
                <Feather name="chevron-right" size={20} color="#AEAEB3" />
              </S.NextSlideButton>
            </S.SwipePage>
            <S.SwipePage>
              <S.Header>
                <Image source={CarIcon} />
                <S.PageNumber>02</S.PageNumber>
              </S.Header>
              <S.Content>
                <S.Title>Depois, escolha o carro</S.Title>
                <S.Description>
                  Vários modelos para você dirigir seguro, com conforto e
                  segurança.
                </S.Description>
              </S.Content>
              <S.NextSlideButton onPress={handleNavigateToWelcomePage}>
                <Feather name="chevron-right" size={20} color="#AEAEB3" />
              </S.NextSlideButton>
            </S.SwipePage>
          </S.SwipeWrapper>
        </>
      )}
    </S.AnimatedView>
  );
}
