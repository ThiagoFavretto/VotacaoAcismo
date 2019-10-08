import React from "react";
import { Container, Card, Vote, Content, Title } from "./styles";
const Small = ({ pegarVotados, data }) => {
  return (
    <Container>
      <Title>Pequeno</Title>
      {data.map((item, i) => (
        <Card key={i}>
          <Content>{item.category.name}</Content>
          <Content>{item.category.size}</Content>
          <Content>{item.owner_name}</Content>
          <Content>{item.company.social_name}</Content>
          <Content>
            {item.company.fantasy_name === item.company.social_name
              ? null
              : item.company.fantasy_name}
          </Content>
          <Vote
            onClick={() =>
              pegarVotados({ dados: item.company.cnpj, categoria: "Small" })
            }
          >
            Votar
          </Vote>
        </Card>
      ))}
    </Container>
  );
};

export default Small;
