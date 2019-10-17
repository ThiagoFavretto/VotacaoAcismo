import React, { useState, useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';
import {
  Container,
  Category,
  CategoryContainer,
  ShowCategory,
  CloseVote,
  Error,
  SaveAll,
} from './styles';

import api from '../../services/api';

import VoteCategory from '../../components/VoteCategory/index';

const Votacao = () => {
  const comercio = [];
  const industria = [];
  const prestacaoDeServico = [];
  const [number, setNumber] = useState(0);
  const [category, setCategory] = useState([]);
  const [votes, setVotes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const votes = localStorage.getItem('votes');

    if (votes) {
      setVotes(JSON.parse(votes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  useEffect(() => {
    const listar = async () => {
      try {
        const res = await api.get('finalists');

        const { finalists } = res.data;

        finalists.forEach(itens => {
          const { name } = itens.category;
          if (name === 'Comércio') comercio.push(itens);
          if (name === 'Indústria') industria.push(itens);
          if (name === 'Prestação de Serviço') prestacaoDeServico.push(itens);
        });
      } catch (e) {
        setError('Ocorreu um erro inesperado ao obter os finalistas');
      }
    };

    listar();
  }, [comercio, industria, number, prestacaoDeServico]);

  const listaVotados = ({ finalist }) => {
    const vote = votes.find(
      ({ category }) =>
        category.size === finalist.category.size &&
        category.name === finalist.category.name
    );
    if (!vote) {
      return setVotes([...votes, finalist]);
    }

    if (vote.saved) {
      return;
    }

    setVotes(votes.map(v => (v.id === vote.id ? finalist : v)));
  };

  const confirmeVotado = () => {
    setVotes(votes.map(vote => ({ ...vote, saved: true })));
    console.log(votes);
  };

  const saveAllVotes = () => {
    const votesToSave = votes.filter(vote => vote.saved);
    if (votesToSave.length === 9) {
      votesToSave.forEach(async ({ id }) => {
        try {
          const response = await api.post(`votes/${id}`);
          console.log(response);
        } catch (e) {
          console.log('b');
          console.log(e);
          setError(e.response.data.error);
        }
      });
    } else {
      setError('Confirme seus votos altes de finalizar');
    }
  };

  return (
    <Container>
      {error && <Error>{error}</Error>}
      <CategoryContainer>
        <Category
          onClick={() => {
            setNumber(1);
            setCategory(comercio);
          }}
        >
          <ShowCategory />
          Comércio
        </Category>
        <Category
          onClick={() => {
            setNumber(2);
            setCategory(industria);
          }}
        >
          <ShowCategory />
          Indústria
        </Category>
        <Category
          onClick={() => {
            setNumber(3);
            setCategory(prestacaoDeServico);
          }}
        >
          <ShowCategory />
          Prestação de Serviço
        </Category>
      </CategoryContainer>

      {number !== 0 && (
        <VoteCategory
          number={number}
          pegarVotados={listaVotados}
          category={category}
          votes={votes}
          onConfirm={confirmeVotado}
        >
          <CloseVote onClick={() => setNumber(0)}>
            <IoIosClose size={50} />
          </CloseVote>
        </VoteCategory>
      )}
      {votes.length === 9 && <SaveAll onClick={saveAllVotes}>Votar</SaveAll>}
    </Container>
  );
};

export default Votacao;
