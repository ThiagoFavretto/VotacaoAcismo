import React, { useState, useEffect } from 'react';
import { Container, Card, Title, Size, Content } from './styles';

import api from '../../services/api';

const Podio = () => {
  const [podio, setPodio] = useState([]);

  useEffect(() => {
    const dados = async e => {
      try {
        const res = await api.get('podiums', {});
        setPodio(res.data.podium);
      } catch (e) {}
    };
    dados();
  }, []);

  console.log(podio);
  return (
    <Container>
      {podio.map((finalist, i) => (
        <Card key={i}>
          <Title>{finalist.category.name}</Title>
          <Size>{finalist.category.size} porte</Size>
          {finalist.ranking.map((iten, i) => (
            <Content key={i}>{iten.owner_name}</Content>
          ))}
        </Card>
      ))}
    </Container>
  );
};

export default Podio;
