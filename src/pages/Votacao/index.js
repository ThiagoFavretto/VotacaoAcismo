import React, { useState, useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';
import {
  Container,
  Category,
  CategoryContainer,
  ShowCategory,
  CloseVote,
  Error,
  ConfimerButton,
  ButtonContainer,
} from './styles';

import api from '../../services/api';

import VoteCategory from '../../components/VoteCategory/index';

const Votacao = () => {
  const [comercio, setComercio] = useState([]);
  const [industria, setIndustria] = useState([]);
  const [prestacaoDeServico, setPrestacaodeServico] = useState([]);
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

        setComercio(
          finalists.filter(({ category }) => category.name === 'Comércio')
        );

        setIndustria(
          finalists.filter(({ category }) => category.name === 'Indústria')
        );

        setPrestacaodeServico(
          finalists.filter(
            ({ category }) => category.name === 'Prestação de Serviço'
          )
        );
      } catch (e) {
        setError('Ocorreu algum problema ao buscar os finalistas');
      }
    };

    listar();
  }, []);

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
    setNumber(0);
  };

  const saveAllVotes = () => {
    const votesToSave = votes.filter(vote => vote.saved);

    if (votesToSave.length === 9) {
      votesToSave.forEach(async ({ id }) => {
        try {
          await api.post(`votes/${id}`);
        } catch (e) {
          setError(e.response.data.error);
        }
      });
    } else {
      setError('Confirme todos os votos antes de finalizar a votação');
    }
  };

  return (
    <Container>
      {error && <Error>{error}</Error>}
      <CategoryContainer>
        {comercio.length > 0 && (
          <Category
            onClick={() => {
              setNumber(1);
              setCategory(comercio);
            }}
          >
            <ShowCategory />
            Comércio
          </Category>
        )}
        {industria.length > 0 && (
          <Category
            onClick={() => {
              setNumber(2);
              setCategory(industria);
            }}
          >
            <ShowCategory />
            Indústria
          </Category>
        )}
        {prestacaoDeServico.length > 0 && (
          <Category
            onClick={() => {
              setNumber(3);
              setCategory(prestacaoDeServico);
            }}
          >
            <ShowCategory />
            Prestação de Serviço
          </Category>
        )}
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

      {number === 0 && (
        <ButtonContainer>
          <ConfimerButton onClick={saveAllVotes} disabled={votes.length !== 9}>
            FINALIZAR VOTAÇÃO
          </ConfimerButton>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default Votacao;
