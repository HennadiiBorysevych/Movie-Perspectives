import { createSlice } from "@reduxjs/toolkit";

import {
  movieDetails,
  playingNow,
  popularMovies,
  popularTopRated,
  popularUpcoming,
} from "./movieOperations";

interface MovieDetailsProps {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  tagline: string;
}

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    sectionTitle: "",
    movieDetails: {} as MovieDetailsProps,
    images: [],
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
    builder.addCase(movieDetails.fulfilled, (state, action) => {
      state.movieDetails = action?.payload?.data;
    });
  },
  reducers: {},
});
