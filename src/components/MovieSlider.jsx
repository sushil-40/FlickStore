import React, { useEffect, useState } from "react";
import z from "../assets/z.jpg";
import ab from "../assets/ab.jpg";
export const MovieSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const slides = [z, ab, z, ab, z];

  // Function to handle automatic slide change every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Move to the next slide, wrap around
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [slides.length]);
  const updateSlides = (index) => {
    setCurrentIndex((index + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <button
        className="arrow left"
        onClick={() => updateSlides(currentIndex - 1)}
      >
        &#8249;
      </button>
      <div className="slider-container">
        {slides.map((slide, index) => {
          const position =
            index === currentIndex
              ? "active"
              : index < currentIndex
              ? "left"
              : "right";

          const zIndex =
            index === currentIndex
              ? 5
              : index < currentIndex
              ? 5 - (currentIndex - index)
              : 5 - (index - currentIndex);

          return (
            <div key={index} className={`slide ${position}`} style={{ zIndex }}>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          );
        })}
      </div>

      <button
        className="arrow right"
        onClick={() => updateSlides(currentIndex + 1)}
      >
        &#8250;
      </button>
    </div>
  );
};
