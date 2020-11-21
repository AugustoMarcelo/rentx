import React, { useCallback, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { CameraIcon } from '../../images/icons';

import * as S from './styles';
import InputText from '../../components/Form/InputText';

export default function EditProfile() {
  const [activeTab, setActiveTab] = useState(1);

  const { goBack } = useNavigation();

  const handleSetActiveTab = useCallback((index: number) => {
    setActiveTab(index);
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onPress={goBack}>
          <Feather name="chevron-left" size={20} color="#AEAEB3" />
        </S.BackButton>
        <S.Title>Editar Perfil</S.Title>
      </S.Header>

      <S.AvatarContainer>
        <S.Avatar
          source={{
            uri:
              'https://media-exp1.licdn.com/dms/image/C4D03AQHwD3T8dAUtWg/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=8HfjqnPVm7eIHz01XpZot4ni-SJ7rgGXDRQhqjXMvcA',
          }}
          resizeMode="contain"
        />
        <S.SelectPhotoButton>
          <CameraIcon height={24} width={24} fill="#fff" />
        </S.SelectPhotoButton>
      </S.AvatarContainer>

      <S.TopTabNavigator>
        <S.TopTabItem
          active={activeTab === 1}
          onPress={() => handleSetActiveTab(1)}
        >
          <S.TopTabItemTitle active={activeTab === 1}>Dados</S.TopTabItemTitle>
        </S.TopTabItem>
        <S.TopTabItem
          active={activeTab === 2}
          onPress={() => handleSetActiveTab(2)}
        >
          <S.TopTabItemTitle active={activeTab === 2}>
            Trocar senha
          </S.TopTabItemTitle>
        </S.TopTabItem>
      </S.TopTabNavigator>

      <S.Content>
        {activeTab === 1 ? (
          <>
            <InputText
              iconName="user"
              placeholder="Seu nome"
              autoCompleteType="off"
              containerStyle={{ marginBottom: 8 }}
            />
            <InputText
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCompleteType="off"
            />
          </>
        ) : (
          <>
            <InputText
              iconName="lock"
              secureTextEntry
              placeholder="Senha atual"
              containerStyle={{ marginBottom: 8 }}
            />
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
          </>
        )}

        <S.ButtonSave>
          <S.ButtonSaveText>Salvar alterações</S.ButtonSaveText>
        </S.ButtonSave>
      </S.Content>
    </S.Container>
  );
}
