import React, { useState } from "react";
import {
  Container,
  EnterCode,
  FormCode,
  Logo,
  ButtonCode,
  Background,
  LogoContainer
} from "./styles";
import logo from "../../assets/logo.png";
import background from "../../assets/oie_transparent.png";

const Login = () => {
  const [code, setCode] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(code);
  };

  return (
    <Container>
      <FormCode>
        <LogoContainer>
          <Logo src={logo} alt="TinDev" />
        </LogoContainer>
        <EnterCode
          placeholder="Digite seu código aqui, EX: 6E21AC"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <ButtonCode type="submit" onClick={handleSubmit}>
          Comece a Votar
        </ButtonCode>
      </FormCode>
      <Background src={background} alt="Onda" />
    </Container>
  );
};

export default Login;
