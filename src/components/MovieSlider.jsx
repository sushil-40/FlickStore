import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import { fetchFromAPI } from "../utils/axios";
import { MovieCard } from "./MovieCard";

export const MovieSlider = ({ onMovieClick }) => {
  // const slides = [z, ab, z, ab, z];
  const [trendingMovies, setTrendingMovies] = useState([]);

  const shouldFetch = useRef(true);
  useEffect(() => {
    if (shouldFetch.current) {
      fetchTrendingMovies();
      shouldFetch.current = false;
    }
  }, []);
  const fetchTrendingMovies = async () => {
    const listOfTrendingMovies = await fetchFromAPI("", "trending");
    setTrendingMovies(listOfTrendingMovies.slice(0, 5));
    // console.log(trendingMovies);
  };
  console.log(trendingMovies);

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
      {trendingMovies.map((item, index) => (
        <div key={index} className="slider-item">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={`Slide ${index + 1}`}
            className="img-fluid"
            onClick={() => onMovieClick(item)}
          />
        </div>
      ))}
    </Slider>
  );
};
