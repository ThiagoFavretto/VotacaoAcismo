import React, { useMemo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Finalists from '../../Finalists';
import Confirme from '../../Confirme';

const Category = ({
  onConfirm,
  pegarVotados,
  category,
  setPorte,
  votes,
  categoryName,
}) => {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setPorte(next),
  };
  const big = [];
  const medium = [];
  const small = [];

  const votesCategory = useMemo(() => {
    return votes.filter(vote => vote.category.name === categoryName);
  }, [categoryName, votes]);

  category.forEach(itens => {
    const { size } = itens.category;
    if (size === 'Grande Porte') big.push(itens);
    if (size === 'Médio Porte') medium.push(itens);
    if (size === 'Pequeno Porte') small.push(itens);
  });

  return (
    <Slider {...settings}>
      <Finalists pegarVotados={pegarVotados} data={small} votes={votes} />
      <Finalists pegarVotados={pegarVotados} data={medium} votes={votes} />
      <Finalists pegarVotados={pegarVotados} data={big} votes={votes} />
      {votesCategory.length === 3 && (
        <Confirme
          onConfirm={onConfirm}
          votes={votes}
          votesCategory={votesCategory}
        />
      )}
    </Slider>
  );
};

export default Category;
