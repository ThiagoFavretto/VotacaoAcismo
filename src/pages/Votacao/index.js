import React, { useState, useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';
import {
  Container,
  Category,
  CategoryContainer,
  ShowCategory,
  CloseVote,
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
      const res = await api.get('finalists');

      const { finalists } = res.data;

      finalists.forEach(itens => {
        const { name } = itens.category;
        if (name === 'Comércio') comercio.push(itens);
        if (name === 'Indústria') industria.push(itens);
        if (name === 'Prestação de Serviço') prestacaoDeServico.push(itens);
      });
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

  const handleConfirmVotes = () => {
    const votesToSave = votes.filter(vote => !vote.saved);

    votesToSave.forEach(async ({ id }) => {
      const response = await api.post(`votes/${id}`);
      console.log(response);
    });

    setVotes(votes.map(vote => ({ ...vote, saved: true })));
  };

  return (
    <Container>
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
          onConfirm={handleConfirmVotes}
          pegarVotados={listaVotados}
          category={category}
          votes={votes}
        >
          <CloseVote onClick={() => setNumber(0)}>
            <IoIosClose size={50} />
          </CloseVote>
        </VoteCategory>
      )}
    </Container>
  );
};

export default Votacao;
