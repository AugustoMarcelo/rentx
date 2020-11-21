import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PencilIcon, PowerIcon } from '../../images/icons';
import api from '../../services/api';
import { IAppointment } from '../Appointments';
import AppointmentItem from '../Appointments/components/AppointmentItem';

import * as S from './styles';

export default function Profile() {
  const [favoriteCar, setFavoriteCar] = useState<IAppointment>({} as IAppointment);
  const { navigate } = useNavigation();
  
  useEffect(() => {
    async function getMoreRentedCar() {
      const response = await api.get<IAppointment>('appointments/1?_expand=car');
      setFavoriteCar(response.data);
    }

    getMoreRentedCar();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <TouchableOpacity onPress={() => navigate('EditProfile')}>
          <PencilIcon height={24} width={24} color="#AEAEB3" />
        </TouchableOpacity>
        <S.Title>Perfil</S.Title>
        <TouchableOpacity onPress={() => navigate('Exit')}>
          <PowerIcon height={22} width={22} color="#AEAEB3" />
        </TouchableOpacity>
      </S.Header>

      <S.Avatar
        source={{
          uri:
            'https://media-exp1.licdn.com/dms/image/C4D03AQHwD3T8dAUtWg/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=8HfjqnPVm7eIHz01XpZot4ni-SJ7rgGXDRQhqjXMvcA',
        }}
        resizeMode="contain"
      />

      <S.Name>Marcelo Augusto</S.Name>

      <S.Content>
        <S.Row borderBottom marginBottom={27}>
          <S.Label>Agendamentos feitos</S.Label>
          <S.Value>05</S.Value>
        </S.Row>

        <S.Row marginBottom={16}>
          <S.Label>Carro favorito</S.Label>
          <S.Value>Utilizado 2 vezes</S.Value>
        </S.Row>
        <AppointmentItem appointment={favoriteCar} showPeriod={false} />
      </S.Content>

    </S.Container>
  );
}
