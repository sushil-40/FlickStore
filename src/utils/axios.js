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

const apiKEY = import.meta.env.VITE_APIKEY;
const apiEP = `https://www.omdbapi.com/?apikey=${apiKEY}&`;

export const fetchFromAPI = async (str) => {
  const url = apiEP + "t= " + str;
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
