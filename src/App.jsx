import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { MovieCard } from "./components/MovieCard";
import { MovieSlider } from "./components/MovieSlider";
import { Display } from "./components/Display";
import { Hero } from "./components/Hero";
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
      <header className="title  font-effect-shadow-multiple">
        Flick Store
      </header>
      {/* Hero container  */}
      <Hero addMovieToList={addMovieToList} />
      {/* <div className="display-list  row mt-5 mb-2"> */}

      {/* Display component (saved movie list)  */}
      <Display
        movieList={movieList}
        handleOnDeleteMovie={handleOnDeleteMovie}
      />
      {/* </div> */}
      <footer className="footer-section container mt-3 ">
        &copy; 2024 Copyright all reserved || Sushil Dangoriya
      </footer>
    </div>
  );
}

export default App;
