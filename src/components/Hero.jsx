/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { MovieCard } from "./MovieCard";
import { MovieSlider } from "./MovieSlider";
import { fetchFromAPI } from "../utils/axios";
import { randomChar } from "../utils/random";

export const Hero = ({ addMovieToList }) => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const [bgImg, setBgImg] = useState("");

  const [trailerURL, setTrailerURL] = useState("");
  const shouldFetch = useRef(true);
  const searchRef = useRef("");
  const [searching, setSearching] = useState(false);
  const trailerURLTest = "https://www.youtube.com/embed/nqT9HQma79A";
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
      // const trailer = await fetchFromAPI(movie.id);
      setSearchedMovie(movie);
      setTrailerURL(movie.trailer);
      // setBgImg(movie.Poster);
      // console.log(movie);
      setBgImg(`https://image.tmdb.org/t/p/w342${movie.poster_path}`);
      // setBgImg(`image.tmdb.org/t/p/w342/7xaQAc01TZOHEku2uC520OIENWx.jpg`);

      //image.tmdb.org/t/p/w342/7xaQAc01TZOHEku2uC520OIENWx.jpg
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

  const movieStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",
    // backdropFilter: "blur(px)",
    opacity: "1",
  };

  console.log("trailer link at Hero", trailerURL);
  return (
    <div className="hero-container container d-flex justify-content-center  flex-column">
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
                    // onFocus={() => setSearching(true)}
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
              {/* <MovieCard
                searchedMovie={searchedMovie}
                handleOnAddToTheList={handleOnAddToTheList}
              /> */}
              {/* <MovieCard searchedMovie={searchedMovie} /> */}
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
                    allowfullscreen
                  ></iframe>
                ) : (
                  <iframe
                    width="560"
                    height="315"
                    src={trailerURL}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  >
                    <iframe
                      width="560"
                      height="315"
                      // src={trailerURL}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </iframe>
                )}

                {/* <video autoPlay loop muted>
                  <source src="your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                <div>{trailerURL}</div>
              </div>
              <div className="tv-stand"></div>
            </div>

            <hr className="line my-4" />
            <div className="trending-movies-container">
              <p className="sub-title">Trending Movies</p>
              {/* Movie slider  */}
              <div className="col-12 trending-movies">
                <MovieSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="display-list  row mt-5 mb-2">
        <Display />
      </div> */}
    </div>
  );
};
