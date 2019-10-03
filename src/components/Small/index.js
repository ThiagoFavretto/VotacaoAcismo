import React from "react";
import { Container, Card, Vote, Content, Title } from "./styles";
const Small = ({ setVotado }) => {
  var res = [
    {
      nome: "ALESSANDRA CATIA VOLPI ME",
      fantasia: "NATURALLE FARMACIA DE MANIPULACAO",
      cnpj: "02.927.627/0001-18"
    },
    {
      nome: "ALESSANDRA CATIA VOLPI ME",
      fantasia: "NATURALLE FARMACIA DE MANIPULACAO",
      cnpj: "02.927.627/0001-18"
    },
    {
      nome: "ALESSANDRA CATIA VOLPI ME",
      fantasia: "NATURALLE FARMACIA DE MANIPULACAO",
      cnpj: "202020"
    }
  ];

  return (
    <Container>
      <Title>Pequeno</Title>
      {res.map((item, i) => (
        <Card key={i}>
          <Content>{item.nome}</Content>
          <Content>{item.fantasia}</Content>
          <Content>{item.cnpj}</Content>
          <Vote onClick={() => setVotado({ ...item })}>Votar</Vote>
        </Card>
      ))}
    </Container>
  );
};

export default Small;
