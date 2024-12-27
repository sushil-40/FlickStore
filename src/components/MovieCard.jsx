import React from "react";

export const MovieCard = ({
  searchedMovie,
  deleteFunc,
  handleOnAddToTheList,
  poster_path,
}) => {
  // const { Poster = "", Title, Plot, imdbRating, mood, imdbID } = searchedMovie;
  const { title, overview, vote_average, mood, id } = searchedMovie;
  // Construct the full URL for the image
  // const posterUrl = poster_path
  //   ? `https://image.tmdb.org/t/p/w342${poster_path}`
  //   : "https://via.placeholder.com/300x450?text=No+Image"; // Fallback image in case poster_path is not available

  // const poster = "https://www.omdbapi.com/src/poster.jpg";

  return (
    <div className="container">
      <div className="row border rounded text-dark p-3 movie-card-item">
        <div className="col-md">
          {/* <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" /> */}
          <img
            src={
              <img
                // src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                // src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                src={poster_path}
                alt=""
              />
            }
            alt=""
          />
        </div>
        <div className="col-md">
          <h3>{title} </h3>
          <p>IMDB Rating: {vote_average}</p>
          <p>{overview?.slice(0, 70)}...</p>
          {!mood && (
            <div className="d-flex justify-content-between gap-2">
              <button
                className="btn btn-warning flex-grow-1"
                onClick={() => handleOnAddToTheList("drama")}
              >
                Drama
              </button>
              <button
                className="btn btn-info flex-grow-1"
                onClick={() => handleOnAddToTheList("action")}
              >
                Action
              </button>
            </div>
          )}

          <div className="d-grid mt-3">
            <button onClick={() => deleteFunc(id)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
