import React, { useState, useEffect, useMemo } from 'react';
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
  Final,
} from './styles';

import api from '../../services/api';

import VoteCategory from '../../components/VoteCategory/index';

const Votacao = () => {
  const [comercio, setComercio] = useState([]);
  const [industria, setIndustria] = useState([]);
  const [prestacaoDeServico, setPrestacaodeServico] = useState([]);
  const [number, setNumber] = useState(0);
  const [category, setCategory] = useState([]);
  const [categoryVotted, setCategoryVotted] = useState([]);
  const [votes, setVotes] = useState([]);
  const [error, setError] = useState('');
  const [men, setMen] = useState(false);
  useEffect(() => {
    const votes = localStorage.getItem(
      `votes_${localStorage.getItem('companyId')}`
    );

    if (votes) {
      const votes_ = JSON.parse(votes);
      setVotes(votes_);
      setCategoryVotted(
        votes_.filter(vote => vote.saved).map(vote => vote.category.name)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      `votes_${localStorage.getItem('companyId')}`,
      JSON.stringify(votes)
    );
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
    setCategoryVotted(votes.map(vote => vote.category.name));
    setNumber(0);
  };

  const saveAllVotes = () => {
    const votesToSave = votes.filter(vote => vote.saved);

    if (votesToSave.length === 9) {
      votesToSave.forEach(async ({ id }) => {
        try {
          await api.post(`votes/${id}`);

          setVotes(votes =>
            votes.map(vote =>
              vote.id === id ? { ...vote, finish: true } : vote
            )
          );
          setMen(true);
        } catch (e) {
          setError(error => [...error, e.response.data.error]);
        }
      });
    }
  };

  const vottedFinish = useMemo(
    () => votes.filter(vote => vote.finish).length === 9,
    [votes]
  );

  return (
    <Container>
      {error && error.map(e => <Error>{e}</Error>)}
      <CategoryContainer>
        {comercio.length > 0 && (
          <Category
            onClick={() => {
              setNumber(1);
              setCategory(comercio);
            }}
          >
            {categoryVotted.indexOf('Comércio') !== -1 ? (
              <>
                Comércio
                <p>VOTOS CONFIRMADOS</p>
              </>
            ) : (
              <>
                <ShowCategory />
                Comércio
              </>
            )}
          </Category>
        )}

        {industria.length > 0 && (
          <Category
            onClick={() => {
              setNumber(2);
              setCategory(industria);
            }}
          >
            {categoryVotted.indexOf('Indústria') !== -1 ? (
              <>
                Indústria
                <p>VOTOS CONFIRMADOS</p>
              </>
            ) : (
              <>
                <ShowCategory />
                Indústria
              </>
            )}
          </Category>
        )}

        {prestacaoDeServico.length > 0 && (
          <Category
            onClick={() => {
              setNumber(3);
              setCategory(prestacaoDeServico);
            }}
          >
            {categoryVotted.indexOf('Prestação de Serviço') !== -1 ? (
              <>
                Prestação de Serviço
                <p>VOTOS CONFIRMADOS</p>
              </>
            ) : (
              <>
                <ShowCategory />
                Prestação de Serviço
              </>
            )}
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
          <ConfimerButton
            onClick={saveAllVotes}
            disabled={
              votes.filter(vote => vote.saved).length !== 9 || vottedFinish
            }
          >
            {vottedFinish ? 'SEUS VOTOS FORAM COMPUTADOS' : 'FINALIZAR VOTAÇÃO'}
          </ConfimerButton>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default Votacao;
