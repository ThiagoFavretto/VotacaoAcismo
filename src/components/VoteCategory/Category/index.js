import React, { useMemo, useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import Finalists from '../../Finalists';
import Confirme from '../../Confirme';
import {
  Container,
  Footer,
  BotaoBack,
  BotaoNext,
  SliderContainer,
} from './styles';

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
  const [big, setBig] = useState([]);
  const [medium, setMedium] = useState([]);
  const [small, setSmall] = useState([]);

  const slide = useRef(null);

  const votesCategory = useMemo(() => {
    return votes.filter(vote => vote.category.name === categoryName);
  }, [categoryName, votes]);

  useEffect(() => {
    category.forEach(itens => {
      const { size } = itens.category;
      if (size === 'Grande') setBig(big => [...big, itens]);
      if (size === 'Médio') setMedium(medium => [...medium, itens]);
      if (size === 'Pequeno') setSmall(small => [...small, itens]);
    });
  }, [category]);

  return (
    <Container>
      <SliderContainer>
        <Slider ref={slide} {...settings}>
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
      </SliderContainer>
      <Footer>
        <BotaoBack onClick={() => slide.current.slickPrev()}>
          <IoMdArrowRoundBack size={30} />
        </BotaoBack>
        <BotaoNext onClick={() => slide.current.slickNext()}>
          <IoMdArrowRoundForward size={30} />
        </BotaoNext>
      </Footer>
    </Container>
  );
};

export default Category;
