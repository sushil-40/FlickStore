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
      <header className="title  font-effect-shadow-multiple container ">
        Flick Store
      </header>

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
          &copy; 2025 Copyright all reserved || Sushil Dangoriya
        </div>
        <div className="tmdb-content col-md-4 ">
          <div className="p1">
            This web application uses
            <a
              href="https://www.themoviedb.org/documentation/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              TMDb API
            </a>
            but is not endorsed, certified, or otherwise approved by TMDB.
          </div>
        </div>
        <div className="acknowledgement-tmdb col-md-2">
          <div className="logo-container">
            <img
              src={tmdbLogo}
              alt="TMDb Logo"
              className="tmdb-logo"
              height="40px"
              width="40px"
            />
            <p>This product uses the TMDb API</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
