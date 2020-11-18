import React, { useState } from 'react';
import { DropletIcon, LeafIcon, EnergyIcon } from '../../../../images/icons';

import * as S from './styles';

const fuels = [
  {
    id: 'gasoline',
    label: 'Gasolina',
    icon: (fill: string) => <DropletIcon height={24} width={24} fill={fill} />,
  },
  {
    id: 'energy',
    label: 'Elétrico',
    icon: (fill: string) => <EnergyIcon height={24} width={24} fill={fill} />,
  },
  {
    id: 'alcohol',
    label: 'Álcool',
    icon: (fill: string) => <LeafIcon height={24} width={24} fill={fill} />,
  },
];

export default function FuelSelector() {
  const [selectedFuel, setSelectedFuel] = useState<string | undefined>();

  function handleSelectFuel(id: string): void {
    if (selectedFuel === id) {
      setSelectedFuel(undefined);
    } else {
      setSelectedFuel(id);
    }
  }

  return (
    <S.Container>
      {fuels.map((fuel) => (
        <S.Item
          key={fuel.id}
          selected={fuel.id === selectedFuel}
          onPress={() => handleSelectFuel(fuel.id)}
        >
          {fuel.icon(fuel.id === selectedFuel ? '#DC1637' : '#AEAEB3')}
          <S.Label selected={fuel.id === selectedFuel}>{fuel.label}</S.Label>
        </S.Item>
      ))}
    </S.Container>
  );
}
