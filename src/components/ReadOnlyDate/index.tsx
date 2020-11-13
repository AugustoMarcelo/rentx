import React from 'react';

import * as S from './styles';

interface Props {
  label: string;
  date: string;
}

const ReadOnlyDate = ({ label, date }: Props) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Date>{date}</S.Date>
    </S.Container>
  );
}

export default ReadOnlyDate;
