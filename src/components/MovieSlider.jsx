import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import z from "../assets/z.jpg";
import ab from "../assets/ab.jpg";
import { fetchFromAPI } from "../utils/axios";

export const MovieSlider = () => {
  const slides = [z, ab, z, ab, z];
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
          {/* <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            // style={{ width: "100%", height: "450px", maxWidth: "400px" }} // Adjust size here
            alt={title}
          /> */}

          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={`Slide ${index + 1}`}
            className="img-fluid"
          />
        </div>
      ))}
    </Slider>
  );
};
