import React, { useState } from "react";
import {
  Container,
  Category,
  CategoryContainer,
  ShowCategory,
  CloseVote
} from "./styles";

import { IoIosClose } from "react-icons/io";
import VoteCategory from "../../components/VoteCategory/index";

const Votacao = () => {
  const [number, setNumber] = useState(0);
  return (
    <Container>
      <CategoryContainer>
        <Category
          onClick={() => {
            setNumber(1);
          }}
        >
          <ShowCategory />
          CATEGORIA 1
        </Category>
        <Category
          onClick={() => {
            setNumber(2);
          }}
        >
          <ShowCategory />
          CATEGORIA 2
        </Category>
        <Category
          onClick={() => {
            setNumber(3);
          }}
        >
          <ShowCategory />
          CATEGORIA 3
        </Category>
      </CategoryContainer>

      <VoteCategory number={number}>
        <CloseVote onClick={() => setNumber(0)}>
          <IoIosClose size={50} />
        </CloseVote>
      </VoteCategory>
    </Container>
  );
};

export default Votacao;
