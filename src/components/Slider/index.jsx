import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function SliderSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };
  return (
    <Slider {...settings}>
      <img
        src="https://photo-zmp3.zadn.vn/banner/9/d/b/a/9dba046f7abe5287600c304870a6f56a.jpg"
        alt=""
      />

      <img
        src="https://photo-zmp3.zadn.vn/banner/9/d/b/a/9dba046f7abe5287600c304870a6f56a.jpg"
        alt=""
      />

      <img
        src="https://photo-zmp3.zadn.vn/banner/9/d/b/a/9dba046f7abe5287600c304870a6f56a.jpg"
        alt=""
      />

      <img
        src="https://photo-zmp3.zadn.vn/banner/9/d/b/a/9dba046f7abe5287600c304870a6f56a.jpg"
        alt=""
      />

      <img
        src="https://photo-zmp3.zadn.vn/banner/9/d/b/a/9dba046f7abe5287600c304870a6f56a.jpg"
        alt=""
      />
    </Slider>
  );
}

export default SliderSection;
