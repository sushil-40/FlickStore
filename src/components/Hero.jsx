import React, { useEffect, useRef, useState } from "react";
import { MovieCard } from "./MovieCard";
import { MovieSlider } from "./MovieSlider";
import { fetchFromAPI } from "../utils/axios";
import { randomChar } from "../utils/random";

export const Hero = () => {
  const shouldFetch = useRef(true);
  const searchRef = useRef("");
  const [searchedMovie, setSearchedMovie] = useState("");

  useEffect(() => {
    if (shouldFetch.current) {
      fetchMovie(randomChar());
      shouldFetch.current = false;
    }
  }, []);

  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    setSearchedMovie(movie);
  };
  console.log(searchedMovie);
  return (
    <div className="hero-container container d-flex justify-content-center  flex-column">
      <div className="hero-content row">
        <div className="left-container col-12 col-md-4  d-flex justify-content-center align-items-center">
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
                  <button type="submit" className="btn btn-primary search-btn">
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="searched-movie">
              <MovieCard searchedMovie={searchedMovie} />
            </div>
          </div>
        </div>
        <div className="right-container col-12 col-md-8   ">
          <div className="video-preview-container d-flex justify-content-center align-items-center flex-column">
            <div className="modern-tv mt-2">
              <div className="tv-screen">
                <video autoPlay loop muted>
                  <source src="your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
