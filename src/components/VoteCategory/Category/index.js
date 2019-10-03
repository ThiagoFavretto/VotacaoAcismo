import React from "react";
// import {} from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Small from "../../Small/index";
import Medium from "../../Medium/index";
import Big from "../../Big/index";
import Confirme from "../../Confirme";

const Category1 = ({ onConfirm, pegarVotados }) => {
  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <Small pegarVotados={pegarVotados} />
      <Medium pegarVotados={pegarVotados} />
      <Big pegarVotados={pegarVotados} />
      <Confirme onConfirm={onConfirm} />
    </Slider>
  );
};

export default Category1;
