import React, { useState } from "react";
import { Container, EnterCode, FormCode, ButtonCode } from "./styles";

const Login = () => {
  const [code, setCode] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(code);
  };

  return (
    <Container>
      <FormCode>
        <EnterCode
          placeholder="Entre com o ceu CNPJ"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <ButtonCode type="submit" onClick={handleSubmit}>
          Comece a Votar
        </ButtonCode>
      </FormCode>
    </Container>
  );
};

export default Login;
