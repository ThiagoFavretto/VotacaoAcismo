import React, { useState } from "react";
import { Container, EnterCode, FormCode, ButtonCode } from "./styles";

import api from "../../services/api";

const Login = ({ history }) => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await api.post("sessions", {
      cnpj: nome,
      password: senha
    });

    localStorage.setItem("token", "Bearer " + res.data.token);
    history.push(`/votacao`);
  };

  return (
    <Container>
      <FormCode>
        <EnterCode
          placeholder="Usuario"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <EnterCode
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />
        <ButtonCode type="submit" onClick={handleSubmit}>
          Comece a Votar
        </ButtonCode>
      </FormCode>
    </Container>
  );
};

export default Login;
