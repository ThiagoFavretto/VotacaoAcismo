import React, { useMemo, useState } from 'react';
import { Container, Title, Header, Close } from './styles';
import Category from './Category/index';

const VoteCategory = ({
  children,
  number,
  onConfirm,
  pegarVotados,
  category,
  votes,
}) => {
  const [porte, setPorte] = useState(0);

  const categoryName = useMemo(() => {
    if (number === 1) {
      return 'Comércio';
    } else if (number === 2) {
      return 'Indústria';
    }

    return 'Prestação de Serviço';
  }, [number]);

  const title = useMemo(() => {
    if (porte === 0) {
      return `${categoryName} - Pequeno Porte`;
    }
    if (porte === 1) {
      return `${categoryName} - Médio Porte`;
    }
    if (porte === 2) {
      return `${categoryName} - Grande Porte`;
    }

    return 'Confirme seus candidatos';
  }, [porte, categoryName]);

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Close>{children}</Close>
      </Header>
      <Category
        onConfirm={onConfirm}
        category={category}
        pegarVotados={pegarVotados}
        setPorte={setPorte}
        votes={votes}
        title={title}
        categoryName={categoryName}
      />
    </Container>
  );
};

export default VoteCategory;
