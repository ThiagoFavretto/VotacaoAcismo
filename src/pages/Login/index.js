import React, { useState } from 'react';
import { Container, EnterCode, FormCode, ButtonCode, Error } from './styles';

import api from '../../services/api';

const Login = ({ history }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if (!id) {
      return setError('O código não pode estar vazio');
    }

    if (!password) {
      return setError('A senha não pode estar vazia');
    }

    try {
      const res = await api.post('sessions', {
        id,
        password,
      });

      const { token, company } = res.data;

      localStorage.setItem('token', token);

      localStorage.setItem('companyId', id);

      api.defaults.headers.authorization = `Bearer ${token}`;

      const adminId = 1000;
      if (Number(id) === adminId) {
        return history.push(`/votacao/resultado`);
      }

      history.push(`/votacao`);
    } catch (e) {
      if (e.response !== undefined) {
        setError(e.response.data.error);
      } else {
        setError('Ocorreu um erro de conexão com o servidor');
      }
    }
  };

  return (
    <Container>
      {error && (
        <Error>
          <p>{error}</p>
        </Error>
      )}
      <FormCode>
        <EnterCode
          placeholder="Código"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <EnterCode
          placeholder="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <ButtonCode type="submit" onClick={handleSubmit}>
          ENTRAR
        </ButtonCode>
      </FormCode>
    </Container>
  );
};

export default Login;
