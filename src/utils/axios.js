import axios from "axios";

const apiKEY = import.meta.env.VITE_APIKEY; // Ensure your API key is set correctly

const baseURL = "https://api.themoviedb.org/3/";

//Function to fetch trailer using movie ID
const fetchTrailer = async (movieId) => {
  const trailerURL = `${baseURL}movie/${movieId}/videos?api_key=${apiKEY}&language=en-US`;

  try {
    const response = await axios.get(trailerURL);
    const videos = response.data.results;

    //Find the first trailer ( or a specific type if needed)

    const trailer = videos.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    if (trailer) {
      return `https://www.youtube.com/embed/${trailer.key}`;
    } else {
      // console.log("No trailer found for this movie.");
      return null;
    }
  } catch (error) {
    console.log("Error fetching trailer", error);
    return null;
  }
};

//for searching movies

export const fetchFromAPI = async (str, type = "search") => {
  let url = "";
  if (type === "search") {
    url = `${baseURL}search/movie?api_key=${apiKEY}&query=${str}`; //fetch movies
  } else if (type === "trending") {
    url = `${baseURL}trending/movie/week?api_key=${apiKEY}`; //Fetch trending movies
  }
  try {
    const response = await axios.get(url); // Make the API call

    if (response.data.results.length > 0) {
      const movies = response.data.results;

      if (type === "search") {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];

        //Fetch trailer for the random movie

        const trailer = await fetchTrailer(randomMovie.id);
        // console.log("trailer link at axios", trailer);
        return { ...randomMovie, trailer };
      } else if (type === "trending") {
        //Fetch trailers for all trending movies
        const moviesWithTrailers = await Promise.all(
          movies.map(async (movie) => {
            const trailer = await fetchTrailer(movie.id);
            return { ...movie, trailer };
          })
        );
        return moviesWithTrailers;
      }
    } else {
      console.log("No results found.");
      return null;
    }
  } catch (error) {
    console.log("Error fetching data", error);
    return null;
  }
};
