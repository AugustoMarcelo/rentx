import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background-color: #1b1b1f;
  height: ${207 - Constants.statusBarHeight}px;
  padding: 24px 24px 0px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 24px;
`;

export const Title = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 25px;
  line-height: 27px;
  color: #FFFFFF;
`;

export const AvatarContainer = styled.View`
  position: relative;
  margin-top: -80px;
  align-self: center;
`;

export const Avatar = styled.Image`
  height: 160px;
  width: 160px;
  border-radius: 80px;
`;

export const SelectPhotoButton = styled(RectButton)`
  position: absolute;
  padding: 10px;
  background-color: #DC1637;
  bottom: 0;
  right: 0;
`;

export const TopTabNavigator = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* padding-bottom: 16px; */
  margin: 32px 24px 0;
  border-bottom-width: 1px;
  border-bottom-color: #EBEBF0;
`;

export const TopTabItem = styled.TouchableOpacity<{ active?: boolean }>`
  padding-bottom: 16px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ active }) => active ? '#DC1637' : 'transparent'};
`;

export const TopTabItemTitle = styled.Text<{ active?: boolean }>`
  font-family: ${({ active }) => active ? 'Archivo_600SemiBold' : 'Archivo_400Regular'};
  font-size: 20px;
  color: ${({ active }) => active ? '#3D3D4D' : '#AEAEB3'};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
`;

export const ButtonSave = styled(RectButton)`
  height: 56px;
  margin-top: auto;
  background-color: #DC1637;
  align-items: center;
  justify-content: center;
`;

export const ButtonSaveText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;
  line-height: 18px;
  color: #FFF;
`;
