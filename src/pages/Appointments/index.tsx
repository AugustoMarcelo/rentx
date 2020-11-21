import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import AppointmentItem from './components/AppointmentItem';
import {ICar} from '../../@types/types';

import * as S from './styles';

export interface IAppointment {
  id: number;
  carId: number;
  start: string;
  end: string;
  car: ICar;
}

const Appointments: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  useEffect(() => {
    async function loadCars() {
      const response = await api.get('appointments?_expand=car');
      setAppointments(response.data);
    }

    loadCars();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Agendamentos</S.Title>
        <S.AppointmentsCountText>{appointments.length} períodos</S.AppointmentsCountText>
      </S.Header>

      <S.AppointmentsListSroll
        data={appointments}
        keyExtractor={appointment => String(appointment.id)}
        renderItem={({ item }: { item: IAppointment }) => (
          <AppointmentItem appointment={item} />
        )}
      />
    </S.Container>
  );
};

export default Appointments;
