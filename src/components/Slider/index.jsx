import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./style.css";

function SliderSection({ banners = undefined }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {banners.map((banner, index) => (
        <img src={banner.banner} alt="" height="200" key={banner.encodeId} />
      ))}
    </Slider>
  );
}

export default SliderSection;
