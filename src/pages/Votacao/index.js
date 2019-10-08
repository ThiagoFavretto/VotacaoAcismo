import React, { useState, useEffect } from "react";
import {
  Container,
  Category,
  CategoryContainer,
  ShowCategory,
  CloseVote
} from "./styles";

import api from "../../services/api";

import { IoIosClose } from "react-icons/io";
import VoteCategory from "../../components/VoteCategory/index";

const Votacao = () => {
  var comercio = [];
  var industria = [];
  var prestacaoDeServico = [];
  const [number, setNumber] = useState(0);
  const [category, setCategory] = useState([]);
  // const [votos, setVotos] = useState([]); 
  const votado = [];

  useEffect(() => {
    (async function listar() {
      const token = localStorage.getItem("token");

      const res = await api.get("finalists", {
        headers: { Authorization: token }
      });

      res.data.finalists.map(itens => {
        const { name } = itens.category;
        if (name === "Comércio") comercio.push(itens);
        if (name === "Indústria") industria.push(itens);
        if (name === "Prestação de Serviço") prestacaoDeServico.push(itens);
      });
    })();
  }, [number]);

  const listaVotados = obj => {
    if (obj.categoria === "Big") votado[0] = obj.dados;
    if (obj.categoria === "Medium") votado[1] = obj.dados;
    if (obj.categoria === "Small") votado[2] = obj.dados;
  };

  const handleSubmit = e => {
    // e.preventDefault
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
          comercio
        </Category>
        <Category
          onClick={() => {
            setNumber(2);
            setCategory(industria);
          }}
        >
          <ShowCategory />
          industria
        </Category>
        <Category
          onClick={() => {
            setNumber(3);
            setCategory(prestacaoDeServico);
          }}
        >
          <ShowCategory />
          prestacao de servico
        </Category>
      </CategoryContainer>

      <VoteCategory
        number={number}
        onConfirm={handleSubmit}
        pegarVotados={listaVotados}
        category={category}
      >
        <CloseVote onClick={() => setNumber(0)}>
          <IoIosClose size={50} />
        </CloseVote>
      </VoteCategory>
    </Container>
  );
};

export default Votacao;
