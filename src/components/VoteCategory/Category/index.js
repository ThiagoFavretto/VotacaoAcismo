import React from "react";
// import {} from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Small from "../../Small/index";
import Medium from "../../Medium/index";
import Big from "../../Big/index";
import Confirme from "../../Confirme";

const Category1 = ({ onConfirm, pegarVotados, category }) => {
  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  var big = [];
  var medium = [];
  var small = [];

  category.map(itens => {
    const { size } = itens.category;
    if (size === "Grande") big.push(itens);
    if (size === "Médio") medium.push(itens);
    if (size === "Pequeno") small.push(itens);
  });
  return (
    <Slider {...settings}>
      <Small pegarVotados={pegarVotados} data={small} />
      <Medium pegarVotados={pegarVotados} data={medium} />
      <Big pegarVotados={pegarVotados} data={big} />
      <Confirme onConfirm={onConfirm} />
    </Slider>
  );
};

export default Category1;
