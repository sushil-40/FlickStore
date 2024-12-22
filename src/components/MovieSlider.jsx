import React from "react";
import Slider from "react-slick";
import z from "../assets/z.jpg";
import ab from "../assets/ab.jpg";

export const MovieSlider = () => {
  const slides = [z, ab, z, ab, z];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides visible
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Autoplay slides
    autoplaySpeed: 3000, // Interval for autoplay
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Single slide for smaller screens
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slider-item">
          <img src={slide} alt={`Slide ${index + 1}`} className="img-fluid" />
        </div>
      ))}
    </Slider>
  );
};
