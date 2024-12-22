import React from "react";

export const MovieCard = () => {
  return (
    <div className="container">
      <div className="col border mb-2 rounded text-dark p-3 movie-card-item">
        <div className="col-md">
          <img src="../src/assets/ab.jpg" alt="" />
        </div>
        <div className="col-md">
          <h3> </h3>
          <p>IMDB Rating: </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
            iste?...
          </p>
          {/* {!mood && ( */}
          <div className="d-flex justify-content-between gap-2">
            <button
              className="btn btn-drama flex-grow-1"
              // onClick={() => handleOnAddToTheList("drama")}
            >
              Drama
            </button>
            <button
              className="btn btn-action flex-grow-1"
              // onClick={() => handleOnAddToTheList("action")}
            >
              Action
            </button>
          </div>

          <div className="d-grid mt-3">
            <button
              //   onClick={() => deleteFunc(imdbID)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
