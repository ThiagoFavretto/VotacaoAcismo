import React from "react";
import { Container, Title, Header, Close } from "./styles";
import Category from "./Category/index";

const VoteCategory = ({ children, number, onConfirm, pegarVotados }) => {
  const categoryNumber = number;
  if (categoryNumber === 1)
    return (
      <Container>
        <Header>
          <Title>CATEGORIA 1</Title>
          <Close>{children}</Close>
        </Header>
        <Category onConfirm={onConfirm} pegarVotados={pegarVotados}></Category>
      </Container>
    );
  else if (categoryNumber === 2)
    return (
      <Container>
        <Header>
          <Title>CATEGORIA 2</Title>
          <Close>{children}</Close>
        </Header>
        <Category onConfirm={onConfirm}></Category>
      </Container>
    );
  else if (categoryNumber === 3)
    return (
      <Container>
        <Header>
          <Title>CATEGORIA 3</Title>
          <Close>{children}</Close>
        </Header>
        <Category onConfirm={onConfirm}></Category>
      </Container>
    );
  return null;
};

export default VoteCategory;
