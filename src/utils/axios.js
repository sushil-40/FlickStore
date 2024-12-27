// import axios from "axios";
// const apiKEY = import.meta.env.VITE_APIKEY;
// const apiEP = `http://www.omdbapi.com/?apikey=${apiKEY}&`;
// export const fetchFromAPI = async (str) => {
//   try {
//     const url = apiEP + "t= " + str;
//     const response = await axios.get(url);
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

import axios from "axios";

const apiKEY = import.meta.env.VITE_APIKEY; // Ensure your API key is set correctly
const apiEP = `https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&query=`; // Corrected API endpoint

export const fetchFromAPI = async (str) => {
  const url = apiEP + str; // Construct the full URL

  try {
    const response = await axios.get(url); // Make the API call
    console.log(response.data.results);
    const movies = response.data.results;

    if (movies.length > 0) {
      // Pick a random movie from the list
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex]; // Get a random movie

      console.log("Random Movie:", randomMovie); // Log the random movie for debugging

      return randomMovie; // Return the randomly selected movie
      // return response.data.results; // Return the response data
    }
  } catch (error) {
    console.log(error); // Log any errors that occur
  }
};
