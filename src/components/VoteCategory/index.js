import React from "react";
import { Container, Title, Header, Close } from "./styles";
import Category1 from "./Category1/index";
import Category2 from "./Category2/index";
import Category3 from "./Category3/index";

const VoteCategory = ({ children, number }) => {
  const categoryNumber = number;
  if (categoryNumber === 1)
    return (
      <Container>
        <Header>
          <Title>CATEGORIA 1</Title>
          <Close>{children}</Close>
        </Header>
        <Category1></Category1>
      </Container>
    );
  else if (categoryNumber === 2)
    return (
      <Container>
        <Header>
          <Title>CATEGORIA 2</Title>
          <Close>{children}</Close>
        </Header>
        <Category2></Category2>
      </Container>
    );
  else if (categoryNumber === 3)
    return (
      <Container>
        <Header>
          <Title>CATEGORIA 3</Title>
          <Close>{children}</Close>
        </Header>
        <Category3></Category3>
      </Container>
    );
  return null;
};

export default VoteCategory;
