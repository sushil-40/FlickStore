import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { Display } from "./components/Display";
import { Hero } from "./components/Hero";
import tmdbLogo from "./assets/tmdb-logo.svg";
import {
  accessFromLocalSession,
  deleteFromLocalSession,
  storeInLocalSession,
} from "./utils/localStorage";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const mvList = accessFromLocalSession();
    mvList?.length && setMovieList(mvList);
  }, []);

  const addMovieToList = (movie) => {
    const tempMv = movieList.filter((item) => item.id !== movie.id);
    setMovieList([...tempMv, movie]);
    storeInLocalSession([...tempMv, movie]);
  };
  const handleOnDeleteMovie = (id) => {
    setMovieList(movieList.filter((mv) => mv.id !== id));
    confirm("Are you sure you want to delete");
    deleteFromLocalSession(id);
  };
  return (
    <div className="wrapper container">
      <div className="header-container container d-flex ">
        <div className="title  font-effect-shadow-multiple">Flick Store</div>
        <div className="logo-container">
          <img
            src={tmdbLogo}
            alt="TMDb Logo"
            className="tmdb-logo"
            height="80px"
            width="80px"
          />
          <p>This product uses the TMDb API</p>
        </div>
      </div>

      {/* Hero container  */}
      <Hero addMovieToList={addMovieToList} />

      {/* Display component (saved movie list)  */}
      <Display
        movieList={movieList}
        handleOnDeleteMovie={handleOnDeleteMovie}
      />
      {/* </div> */}
      <div className="footer-section   d-flex gap-5 container mt-3 ">
        <div className="personal-content">
          &copy; 2024 Copyright all reserved || Sushil Dangoriya
        </div>
        <div className="acknowledgement-tmdb">
          <p>
            The
            <a
              href="https://www.themoviedb.org/documentation/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              TMDb API
            </a>{" "}
            is an invaluable resource for developers and creators worldwide, and
            I am grateful for the opportunity to use it in this educational
            project.
          </p>
        </div>
        <div className="tmdb-content d-flex flex-column align-items-start">
          <div className="p1">
            This product uses the
            <a
              href="https://www.themoviedb.org/documentation/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              TMDb API
            </a>
            but is not endorsed or certified by TMDb.
          </div>

          <div className="p2">
            Powered by
            <a href="https://www.themoviedb.org/" target="_blank">
              TMDb
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
