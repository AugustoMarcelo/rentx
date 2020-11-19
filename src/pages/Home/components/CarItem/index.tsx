import React, { useMemo } from 'react';

import { ICar } from '../../../../@types/types';

import { DropletIcon, EnergyIcon, LeafIcon } from '../../../../images/icons';
import * as S from './styles';

export default function CarItem({ brand, model, url, daily, fuel }: ICar) {
  const getFuelIcon = (type: 'gasoline' | 'energy' | 'alcohol') =>
    useMemo(() => {
      switch (type) {
        case 'gasoline':
          return <DropletIcon width={24} height={24} fill="#AEAEB3" />;
        case 'energy':
          return <EnergyIcon width={24} height={24} fill="#AEAEB3" />;
        default:
          return <LeafIcon width={24} height={24} fill="#AEAEB3" />;
      }
    }, []);

  return (
    <S.Container>
      <S.Row>
        <S.ModelContainer>
          <S.Brand>{brand}</S.Brand>
          <S.ModelName>{model}</S.ModelName>
        </S.ModelContainer>
        <S.PriceContainer>
          <S.Label>Ao Dia</S.Label>
          <S.PriceText>R$ {daily}</S.PriceText>
        </S.PriceContainer>
      </S.Row>

      <S.CarImage source={{ uri: url }} resizeMode="contain" />

      <S.Row style={{ marginBottom: 0 }}>
        {getFuelIcon(fuel)}
        <S.Dots>
          {Array.from({ length: 4 }).map((_, index) => (
            <S.Dot key={index} active={index === 0} />
          ))}
        </S.Dots>
      </S.Row>
    </S.Container>
  );
}
