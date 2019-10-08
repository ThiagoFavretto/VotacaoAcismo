import React from "react";
import { Container, Card, Vote, Content, Title } from "./styles";
const Big = ({ pegarVotados, data }) => {
  return (
    <Container>
      <Title>Grande</Title>
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
              pegarVotados({ dados: item.company.cnpj, categoria: "Big" })
            }
          >
            Votar
          </Vote>
        </Card>
      ))}
    </Container>
  );
};

export default Big;
