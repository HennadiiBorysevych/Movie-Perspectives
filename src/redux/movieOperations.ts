import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  transformResponse: [
    (data) => {
      const parsedData = JSON.parse(data);
      delete parsedData.headers;
      return parsedData;
    },
  ],
});

api.defaults.params = {
  api_key: "9039ea298d3f54d722d1b83eac98c5e3",
  language: "en-US",
};
export const playingNow = createAsyncThunk(
  "movies/playingNow",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get("movie/now_playing");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const popularMovies = createAsyncThunk(
  "movies/popularMovies",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get("movie/popular");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const popularTopRated = createAsyncThunk(
  "movies/top_rated",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get("movie/top_rated");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const popularUpcoming = createAsyncThunk(
  "movies/Upcoming",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get("movie/upcoming");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// export const searchMovieById = async id => {
//     const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${id}${KEY}`
//     );
//     const data = await response.json();
//     return data;
// };
// export const searchMovieByQuery = async query => {
//     const response = await fetch(
//         `https://api.themoviedb.org/3/search/movie${KEY}&query=${query}`
//     );
//     const data = await response.json();
//     return data.results;
// };
// export const searchMovieCast = async id => {
//     const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${id}/credits${KEY}`
//     );
//     const data = await response.json();
//     return data.cast;
// };
// export const getMovieReviews = async (movieId) => {
//     const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}/reviews${KEY}`
//     );
//     const data = await response.json();
//     return data.results;
// };
