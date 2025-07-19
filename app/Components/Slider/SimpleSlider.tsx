import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,

  };

  const slides = [
    { id: 1, url: "TypeSprites/poison.png" },
    { id: 2, url: "TypeSprites/psychic.png" },
    { id: 3, url: "TypeSprites/fighting.png" },
    { id: 4, url: "TypeSprites/electric.png" },
    { id: 5, url: "TypeSprites/fairy.png" },
    { id: 6, url: "TypeSprites/rock.png" },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <img className="w-full" src={slide.url} alt="" />
        </div>
      ))}

    </Slider>
  );
}