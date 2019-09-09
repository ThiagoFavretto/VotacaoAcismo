import React from "react";
// import {} from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Smal from "../../Smal/index";
import Medium from "../../Medium/index";
import Big from "../../Big/index";

const Category2 = () => {
  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <Smal />
      <Medium />
      <Big />
    </Slider>
  );
};

export default Category2;
