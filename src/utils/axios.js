// import axios from "axios";

// const apiKEY = import.meta.env.VITE_APIKEY; // Ensure your API key is set correctly
// const apiEP = `https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&query=`; // Corrected API endpoint

// export const fetchFromAPI = async (str) => {
//   const url = apiEP + str; // Construct the full URL

//   try {
//     const response = await axios.get(url); // Make the API call
//     // console.log(response.data.results);
//     const movies = response.data.results;
//     // console.log(movies);

//     if (movies.length > 0) {
//       // Pick a random movie from the list
//       const randomIndex = Math.floor(Math.random() * movies.length);
//       const randomMovie = movies[randomIndex]; // Get a random movie

//       console.log("Random Movie:", randomMovie); // Log the random movie for debugging

//       return randomMovie; // Return the randomly selected movie
//       // return response.data.results; // Return the response data
//     }
//   } catch (error) {
//     console.log(error); // Log any errors that occur
//   }
// };

import axios from "axios";

const apiKEY = import.meta.env.VITE_APIKEY; // Ensure your API key is set correctly

const baseURL = "https://api.themoviedb.org/3/";

//for searching movies
// https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=Inception
//for trending movies

// https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_API_KEY

// const apiEP = `https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&query=`; // Corrected API endpoint

export const fetchFromAPI = async (str, type = "search") => {
  // const url = apiEP + str; // Construct the full URL
  let url = "";
  if (type === "search") {
    url = `${baseURL}search/movie?api_key=${apiKEY}&query=${str}`; //fetch movies
  } else if (type === "trending") {
    url = `${baseURL}trending/movie/week?api_key=${apiKEY}`; //Fetch trending movies
  }
  try {
    const response = await axios.get(url); // Make the API call
    // console.log(response.data.results);
    if (response.data.results.length > 0) {
      const movies = response.data.results;
      // console.log(movies);
      if (type === "search") {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];
        return randomMovie;
      } else if (type === "trending") {
        return movies;
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
