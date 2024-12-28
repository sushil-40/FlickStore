export const storeInLocalSession = (myArg) => {
  localStorage.setItem("movieList", JSON.stringify(myArg));
};

export const accessFromLocalSession = () => {
  const str = localStorage.getItem("movieList");
  return str ? JSON.parse(localStorage.getItem("movieList")) : null;
};

export const deleteFromLocalSession = (id) => {
  const movieList = accessFromLocalSession();
  const updatedMovieList = movieList.filter((mv) => mv.id !== id);
  localStorage.setItem("movieList", JSON.stringify(updatedMovieList));
};
