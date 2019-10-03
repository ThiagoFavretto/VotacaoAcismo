import React from "react";
import { Container, Card, Vote, Content, Title } from "./styles";
const Big = ({ pegarVotados }) => {
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
  console.log(pegarVotados);
  return (
    <Container>
      <Title>Grande</Title>
      {res.map((item, i) => (
        <Card key={i}>
          <Content>{item.nome}</Content>
          <Content>{item.fantasia}</Content>
          <Content>{item.cnpj}</Content>
          <Vote onClick={() => pegarVotados(item.cnpj)}>Votar</Vote>
        </Card>
      ))}
    </Container>
  );
};

export default Big;
