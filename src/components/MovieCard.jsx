// import React from "react";

// export const MovieCard = ({ searchedMovie,handleOnAddToTheList }) => {
//   const { Title, Plot, Poster, imdbRating, imdbID, mood } = searchedMovie;
//   return (
//     <div className="container">
//       <div className="col border mb-2 rounded text-dark p-3 movie-card-item">
//         <div className="col-md">
//           <img src={Poster} alt="" />
//         </div>
//         <div className="col-md">
//           <h3>{Title} </h3>
//           <p>IMDB Rating: {imdbRating}</p>
//           <p>{Plot?.slice(0, 70)}</p>
//           {!mood && (
//             <div className="d-flex justify-content-between gap-2">
//               <button
//                 className="btn btn-drama flex-grow-1"
//                 onClick={() => handleOnAddToTheList("drama")}
//               >
//                 Drama
//               </button>
//               <button
//                 className="btn btn-action flex-grow-1"
//                 onClick={() => handleOnAddToTheList("action")}
//               >
//                 Action
//               </button>
//             </div>
//           )}
//           <div className="d-grid mt-3">
//             <button
//               //   onClick={() => deleteFunc(imdbID)}
//               className="btn btn-danger"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";

export const MovieCard = ({
  searchedMovie,
  deleteFunc,
  handleOnAddToTheList,
}) => {
  const { Poster, Title, Plot, imdbRating, mood, imdbID } = searchedMovie;
  // const poster = "https://www.omdbapi.com/src/poster.jpg";
  return (
    <div className="container">
      <div className="row border rounded text-dark p-3 movie-card-item">
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>{Title} </h3>
          <p>IMDB Rating: {imdbRating}</p>
          <p>{Plot?.slice(0, 70)}...</p>
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
            <button
              onClick={() => deleteFunc(imdbID)}
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
