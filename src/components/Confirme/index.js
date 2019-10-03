import React from "react";
import { Container, ConfimerButton } from "./styles";

const Confirme = ({ onConfirm }) => {
  return (
    <Container>
      <ConfimerButton onClick={onConfirm}>Confirmar</ConfimerButton>
    </Container>
  );
};

export default Confirme;
