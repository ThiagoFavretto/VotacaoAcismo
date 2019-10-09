import React, { useMemo } from 'react';
import { Container, ConfimerButton, Card, Content } from './styles';

const Confirme = ({ onConfirm, votesCategory }) => {
  const alreadyVotted = useMemo(() => votesCategory.every(vote => vote.saved), [
    votesCategory,
  ]);

  return (
    <Container>
      {votesCategory.map((vote, i) => (
        <Card key={i}>
          <Content>{vote.owner_name}</Content>
          <Content>{vote.company.fantasy_name}</Content>
          <Content>{vote.category.size}</Content>
        </Card>
      ))}

      <ConfimerButton
        onClick={alreadyVotted ? () => {} : onConfirm}
        alreadyVotted={alreadyVotted}
      >
        {alreadyVotted ? 'VOTOS SALVOS' : 'VOTAR'}
      </ConfimerButton>
    </Container>
  );
};

export default Confirme;
