import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWE4YzZhMDE3MDkxY2UzYTE4OTlkOTI1ODFlNWFjZCIsIm5iZiI6MTczNjY5MTE2Ni42NzcsInN1YiI6IjY3ODNjZGRlYWJhYmJiYTA0MGJiNGRmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0QZrDyNcdN8IoYS1LJ1YdPZm1HC7F4BPPqMW7T7nArQ";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    accept: "application/json",
  },
};

export const getTrendingMovie = async () => {
  const { data } = await axios.get("/trending/movie/day", options);
  return data;
};

export const getSearchMovie = async (query) => {
  const { data } = await axios.get(`/search/movie?query=${query}`, options);
  return data;
};

export const getDetailsMovie = async (id) => {
  const { data } = await axios.get(`/movie/movie_${id}`, options);
  return data;
};

export const getCreditsMovie = async (id) => {
  const { data } = await axios.get(`/movie/movie_${id}/credits`, options);
  return data;
};

export const getReviewsMovie = async (id) => {
  const { data } = await axios.get(`/movie/movie_${id}/reviews`, options);
  return data;
};
