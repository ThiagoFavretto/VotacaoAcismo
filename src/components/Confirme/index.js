import React, { useMemo } from 'react';
import {
  Container,
  ConfimerButton,
  Card,
  Content,
  Foto,
  Name,
  ButtonContainer,
} from './styles';

import i1 from '../../assets/fotos/i1.jpg';
import i2 from '../../assets/fotos/i2.png';
import i3 from '../../assets/fotos/i3.JPG';
import i4 from '../../assets/fotos/i4.jpg';
import i5 from '../../assets/fotos/i5.jpg';
import i7 from '../../assets/fotos/i7.jpg';
import i8 from '../../assets/fotos/i8.jpg';
import i9 from '../../assets/fotos/i9.jpg';
import i10 from '../../assets/fotos/i10.jpg';
import i11 from '../../assets/fotos/i11.jpg';
import i12 from '../../assets/fotos/i12.jpg';
import i13 from '../../assets/fotos/i13.jpg';
import i14 from '../../assets/fotos/i14.jpg';
import i16 from '../../assets/fotos/i16.jpg';
import i17 from '../../assets/fotos/i17.jpg';
import i18 from '../../assets/fotos/i18.jpg';
import i19 from '../../assets/fotos/i19.jpg';
import i20 from '../../assets/fotos/i20.jpg';
import i21 from '../../assets/fotos/i21.jpg';
import i22 from '../../assets/fotos/i22.jpg';
import i23 from '../../assets/fotos/i23.JPG';
import i24 from '../../assets/fotos/i24.jpg';
import i25 from '../../assets/fotos/i25.jpg';
import i26 from '../../assets/fotos/i26.jpg';
import i27 from '../../assets/fotos/i27.jpg';

const Confirme = ({ onConfirm, votesCategory }) => {
  const alreadyVotted = useMemo(() => votesCategory.every(vote => vote.saved), [
    votesCategory,
  ]);

  const imagens = {
    1: i1,
    2: i2,
    3: i3,
    4: i4,
    5: i5,
    6: 1,
    7: i7,
    8: i8,
    9: i9,
    10: i10,
    11: i11,
    12: i12,
    13: i13,
    14: i14,
    15: 1,
    16: i16,
    17: i17,
    18: i18,
    19: i19,
    20: i20,
    21: i21,
    22: i22,
    23: i23,
    24: i24,
    25: i25,
    26: i26,
    27: i27,
  };

  return (
    <Container>
      {votesCategory.map((vote, i) => (
        <Card key={i}>
          <Foto data={imagens[vote.id]}></Foto>
          <Content>
            <Name>{vote.owner_name}</Name>
            <Name>{vote.company.fantasy_name}</Name>
            <Name>{vote.category.size}</Name>
          </Content>
        </Card>
      ))}

      <ButtonContainer>
        <ConfimerButton
          onClick={alreadyVotted ? () => {} : onConfirm}
          alreadyVotted={alreadyVotted}
        >
          {alreadyVotted ? 'VOTOS CONFIRMADOS' : 'CONFIRMAR'}
        </ConfimerButton>
      </ButtonContainer>
    </Container>
  );
};

export default Confirme;
