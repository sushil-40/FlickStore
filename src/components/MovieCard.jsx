import React from "react";

export const MovieCard = ({
  searchedMovie,
  deleteFunc,
  handleOnAddToTheList,
  // poster_path,
}) => {
  const { title, overview, vote_average, mood, id, poster_path } =
    searchedMovie;

  return (
    <div className="container">
      <div className="row border rounded text-dark p-3 movie-card-item">
        <div className="col-md">
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            // style={{ width: "100%", height: "450px", maxWidth: "400px" }} // Adjust size here
            alt={title}
          />
        </div>
        <div className="col-md">
          <h3>{title} </h3>
          <p>Rating: {vote_average}</p>
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
