import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const Display = ({ movieList, searchedMovie, handleOnDeleteMovie }) => {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const handleOnFilter = (mood) => {
    if (mood === "all") {
      return setDisplayList(movieList);
    }
    setDisplayList(movieList.filter((mv) => mv.mood === mood));
  };

  return (
    <div className=" mt-1">
      <div className="display-container p-3 rounded">
        <div className="row">
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => handleOnFilter("all")}
                type="button"
                className="btn btn-primary"
              >
                All
              </button>
              <button
                onClick={() => handleOnFilter("drama")}
                type="button"
                className="btn btn-warning"
              >
                Drama
              </button>
              <button
                onClick={() => handleOnFilter("action")}
                type="button"
                className="btn btn-info"
              >
                Action
              </button>
            </div>
            <div className="mt-3 text-light">
              {displayList.length} Movies Listed
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col d-flex justify-content-around gap-2 flex-wrap">
            {displayList.map((item, i) => {
              return (
                <div className="" key={i}>
                  <MovieCard
                    searchedMovie={item}
                    deleteFunc={handleOnDeleteMovie}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
