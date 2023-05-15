import { createSlice } from "@reduxjs/toolkit";

import {
  playingNow,
  popularMovies,
  popularTopRated,
  popularUpcoming,
} from "./movieOperations";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    sectionTitle: "",
  },
  extraReducers: (builder) => {
    builder.addCase(playingNow.fulfilled, (state, action) => {
      state.movies = action?.payload?.data?.results;
      state.sectionTitle = "Now Playing";
    });
    builder.addCase(popularMovies.fulfilled, (state, action) => {
      state.movies = action?.payload?.data?.results;
      state.sectionTitle = "Popular Now";
    });
    builder.addCase(popularTopRated.fulfilled, (state, action) => {
      state.movies = action?.payload?.data?.results;
      state.sectionTitle = "Top Rated";
    });
    builder.addCase(popularUpcoming.fulfilled, (state, action) => {
      state.movies = action?.payload?.data?.results;
      state.sectionTitle = "Upcoming Movies";
    });
  },
  reducers: {},
});
