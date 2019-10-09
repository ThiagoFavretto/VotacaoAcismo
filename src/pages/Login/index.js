import React, { useState } from 'react';
import { Container, EnterCode, FormCode, ButtonCode, Error } from './styles';

import api from '../../services/api';

const Login = ({ history }) => {
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if (!cnpj) {
      return setError('O CNPJ não pode estar vazio');
    }

    if (!password) {
      return setError('A senha não pode estar vazia');
    }

    try {
      const res = await api.post('sessions', {
        cnpj,
        password,
      });

      const { token } = res.data;

      localStorage.setItem('token', token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      history.push(`/votacao`);
    } catch (e) {
      console.log(e);
      const { error } = e.response.data;
      setError(error);
    }
  };

  return (
    <Container>
      <FormCode>
        <EnterCode
          placeholder="CNPJ"
          value={cnpj}
          onChange={e => setCnpj(e.target.value)}
        />
        <EnterCode
          placeholder="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {error && (
          <Error>
            <p>{error}</p>
          </Error>
        )}
        <ButtonCode type="submit" onClick={handleSubmit}>
          ENTRAR
        </ButtonCode>
      </FormCode>
    </Container>
  );
};

export default Login;
