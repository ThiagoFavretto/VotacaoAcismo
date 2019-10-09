import React from 'react';
import { Container, Card, Content } from './styles';

const Finalists = ({ pegarVotados, data, votes }) => {
  return (
    <Container>
      {data.map((finalist, i) => (
        <Card
          key={i}
          onClick={() => pegarVotados({ finalist })}
          active={votes.find(({ id }) => id === finalist.id)}
        >
          <Content>{finalist.owner_name}</Content>
          <Content>{finalist.company.fantasy_name}</Content>
        </Card>
      ))}
    </Container>
  );
};

export default Finalists;
