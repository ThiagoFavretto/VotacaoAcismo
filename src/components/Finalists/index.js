import React from 'react';
import { Container, Card, Content, Foto, Name } from './styles';
import i1 from '../../assets/fotos/1.jpg';
import i2 from '../../assets/fotos/2.jpg';
import i3 from '../../assets/fotos/3.jpg';
import i4 from '../../assets/fotos/4.jpg';
import i5 from '../../assets/fotos/5.jpg';
import i7 from '../../assets/fotos/7.jpg';
import i8 from '../../assets/fotos/8.jpg';
import i9 from '../../assets/fotos/9.jpg';
import i10 from '../../assets/fotos/10.jpg';
import i11 from '../../assets/fotos/11.jpg';
import i12 from '../../assets/fotos/12.jpg';
import i13 from '../../assets/fotos/13.jpg';
import i14 from '../../assets/fotos/14.jpg';
import i16 from '../../assets/fotos/16.jpg';
import i17 from '../../assets/fotos/17.jpg';
import i18 from '../../assets/fotos/18.jpg';
import i19 from '../../assets/fotos/19.jpg';
import i20 from '../../assets/fotos/20.jpg';
import i21 from '../../assets/fotos/21.jpg';
import i22 from '../../assets/fotos/22.jpg';
import i23 from '../../assets/fotos/23.JPG';
import i24 from '../../assets/fotos/24.jpg';
import i25 from '../../assets/fotos/25.jpg';
import i26 from '../../assets/fotos/26.jpg';
import i27 from '../../assets/fotos/27.jpg';
import i15 from '../../assets/fotos/15.jpg';
import i6 from '../../assets/fotos/6.jpg';

const Finalists = ({ pegarVotados, data, votes }) => {
  const imagens = {
    1: i1,
    2: i2,
    3: i3,
    4: i4,
    5: i5,
    6: i6,
    7: i7,
    8: i8,
    9: i9,
    10: i10,
    11: i11,
    12: i12,
    13: i13,
    14: i14,
    15: i15,
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
      {data.map((finalist, i) => (
        <Card
          key={i}
          onClick={() => pegarVotados({ finalist })}
          active={votes.find(({ id }) => id === finalist.id)}
        >
          <Foto data={imagens[finalist.id]} />
          <Content>
            <Name>{finalist.owner_name}</Name>
            <Name>{finalist.company.fantasy_name}</Name>
          </Content>
        </Card>
      ))}
    </Container>
  );
};

export default Finalists;
