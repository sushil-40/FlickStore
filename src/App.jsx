import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { MovieCard } from "./components/MovieCard";
import { MovieSlider } from "./components/MovieSlider";
import { Display } from "./components/Display";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="wrapper container">
      <header className="title  font-effect-shadow-multiple">
        Flick Store
      </header>
      {/* Hero container  */}
      <Hero />
      {/* <div className="display-list  row mt-5 mb-2"> */}

      {/* Display component (saved movie list)  */}
      <Display />
      {/* </div> */}
      <footer className="footer-section container mt-3 ">
        &copy; 2024 Copyright all reserved || Sushil Dangoriya
      </footer>
    </div>
  );
}

export default App;
