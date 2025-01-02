/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";

import { MovieCard } from "./MovieCard";
import { MovieSlider } from "./MovieSlider";
import { fetchFromAPI } from "../utils/axios";
import { randomChar } from "../utils/random";
import bgImgDefault from "../assets/q.jpg";

export const Hero = ({ addMovieToList }) => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const [bgImg, setBgImg] = useState("");
  const [loadingBg, setLoadingBg] = useState(true);
  const [trailerURL, setTrailerURL] = useState("");
  const shouldFetch = useRef(true);
  const searchRef = useRef("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (shouldFetch.current) {
      //fetch movie
      fetchMovie(randomChar());

      shouldFetch.curent = false;
    }
  }, []);

  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    if (movie) {
      setSearchedMovie(movie);
      setTrailerURL(movie.trailer);

      setBgImg(`https://image.tmdb.org/t/p/w342${movie.poster_path}`);

      //Image Loaded
      setLoadingBg(false);
      setSearching(false);
    }
  };

  const handleOnMovieSearch = () => {
    const str = searchRef.current.value;
    console.log(str);
    fetchMovie(str);

    searchRef.current.value = "";
  };
  const handleOnDelete = () => {
    setSearchedMovie({});
    setSearching(true);
  };
  const handleOnAddToTheList = (mood) => {
    addMovieToList({
      ...searchedMovie,
      mood,
    });
    setSearchedMovie({});
    setSearching(true);
  };

  const handleOnTrendingMovieClick = (movie) => {
    setSearchedMovie({ ...movie, mood: null });
    setTrailerURL(movie.trailer);

    setBgImg(`https://image.tmdb.org/t/p/w342${movie.poster_path}`);
    setLoadingBg(false);
    setSearching(false);
  };

  const movieStyle = {
    // backgroundImage: loadingBg ? `url(${bgImgDefault}))` : `url(${bgImg})`,
    backgroundImage: `url(${loadingBg ? bgImgDefault : bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",

    opacity: loadingBg ? "0" : "1",
    transition: "opacity 0.3s ease",
  };
  const movieStyle1 = {
    // backgroundImage: loadingBg ? `url(${bgImgDefault}))` : `url(${bgImg})`,
    backgroundImage: `url(${loadingBg ? bgImgDefault : null})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",

    opacity: loadingBg ? "0" : "1",
    transition: "opacity 0.3s ease",
  };

  return (
    <div
      className="hero-container container d-flex justify-content-center  flex-column"
      style={movieStyle1}
    >
      <div className="hero-content row">
        <div
          className="left-container mt-2 col-12 col-md-4  d-flex justify-content-center align-items-center"
          style={movieStyle}
        >
          <div className="movie-search-container m-2 d-flex flex-column">
            <div className="movie-search d-flex justify-content-center align-items-start m-2 rounded">
              <form>
                <div className="mb-3">
                  <p className="desc">Search millions of Movies online!</p>
                  <input
                    ref={searchRef}
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="enter movie name"
                  />
                </div>
                <div className="search-btn-container">
                  <button
                    type="button"
                    onClick={handleOnMovieSearch}
                    className="btn btn-primary search-btn"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="searched-movie">
              {!searching && (
                <div className="movie-card-display showMovie">
                  <MovieCard
                    searchedMovie={searchedMovie}
                    poster_path={bgImg}
                    deleteFunc={handleOnDelete}
                    handleOnAddToTheList={handleOnAddToTheList}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="right-container col-12 col-md-8   ">
          <div className="video-preview-container d-flex justify-content-center align-items-center flex-column">
            <div className="modern-tv mt-2">
              <div className="tv-screen">
                {trailerURL ? (
                  <iframe
                    width="560"
                    height="315"
                    src={trailerURL}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p className="text-center">No trailer available.</p>
                )}
              </div>
              <div className="tv-stand"></div>
            </div>

            <hr className="line my-4" />
            <div className="trending-movies-container">
              <p className="sub-title">Trending Movies</p>
              {/* Movie slider  */}
              <div className="col-12 trending-movies">
                <MovieSlider onMovieClick={handleOnTrendingMovieClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
