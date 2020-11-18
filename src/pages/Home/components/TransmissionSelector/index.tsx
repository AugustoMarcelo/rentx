import React, { useState } from 'react';
import { DropletIcon, LeafIcon, EnergyIcon } from '../../../../images/icons';

import * as S from './styles';

const transmissions = [
  {
    id: 'automatic',
    label: 'Automático',
  },
  {
    id: 'manual',
    label: 'Manual',
  },
];

export default function TransmissionSelector() {
  const [selectedTransmission, setSelectedTransmission] = useState<
    string | undefined
  >();

  function handleSelectTransmission(id: string): void {
    if (selectedTransmission === id) {
      setSelectedTransmission(undefined);
    } else {
      setSelectedTransmission(id);
    }
  }

  return (
    <S.Container>
      {transmissions.map((transmission) => (
        <S.Item
          key={transmission.id}
          selected={transmission.id === selectedTransmission}
          onPress={() => handleSelectTransmission(transmission.id)}
        >
          <S.Label>
            {transmission.label}
          </S.Label>
        </S.Item>
      ))}
    </S.Container>
  );
}
