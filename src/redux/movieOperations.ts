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
export const movieDetails = createAsyncThunk(
  "movies/movieDetails",
  async (id: string, { rejectWithValue }) => {
    try {
      const data = await api.get(`movie/${id}`);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const movieCast = createAsyncThunk(
  "movies/moviecast",
  async (id: string, { rejectWithValue }) => {
    try {
      const data = await api.get(`movie/${id}/credits`);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const movieReviews = createAsyncThunk(
  "movies/moviereviews",
  async (id: string, { rejectWithValue }) => {
    try {
      const data = await api.get(`movie/${id}/reviews`);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
