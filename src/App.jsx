import { useState } from "react";

import "./App.css";
import { MovieCard } from "./components/MovieCard";
import { MovieSlider } from "./components/MovieSlider";

function App() {
  return (
    <div className="wrapper">
      <header className="title  font-effect-shadow-multiple">
        Flick Store
      </header>

      <div className="hero-container">
        <div className="hero-content row">
          <div className="left-container col-12 col-md-4  d-flex justify-content-center align-items-center">
            <div className="movie-search-container m-2 d-flex flex-column">
              <div className="movie-search d-flex justify-content-center align-items-start m-2 rounded">
                <form>
                  <div className="mb-3">
                    <p className="desc">Search millions of Movies online!</p>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="enter movie name"
                    />
                  </div>
                  <div className="search-btn-container">
                    <button
                      type="submit"
                      className="btn btn-primary search-btn"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div className="searched-movie">
                <MovieCard />
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
              <hr className="line" />
              <div className="trending-movies">
                <p className="sub-title">Trending Movies</p>
                {/* Movie slider  */}
                <MovieSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-section  m-2">
        &copy; 2024 Copyright all reserved || Sushil Dangoriya
      </footer>
    </div>
  );
}

export default App;
