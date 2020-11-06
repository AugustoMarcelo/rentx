import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import { Animated } from 'react-native';

export const AnimatedView = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SwipeWrapper = styled(Swiper).attrs({
  dotStyle: {
    borderRadius: 2,
    width: 4,
    height: 4,
  },
  activeDotStyle: {
    borderRadius: 2,
    width: 4,
    height: 4,
  },
  activeDotColor: '#47474D',
  paginationStyle: {
    justifyContent: 'flex-start',
    paddingLeft: 32,
    paddingBottom: 39,
  },
})``;

export const SwipePage = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 32px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PageNumber = styled.Text`
  color: #EBEBF0;
  font-size: 72px;
  font-weight: bold;
`;

export const Content = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 40px;
  line-height: 42px;
  color: #47474D;
  max-width: 185px;
`;

export const Description = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 15px;
  line-height: 25px;
  color: #7A7A80;
  max-width: 199px;
  margin-top: 24px;
`;

export const NextSlideButton = styled.TouchableOpacity`
  position: absolute;
  right: 32px;
  bottom: 58px;
`;