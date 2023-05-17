import { createSlice } from "@reduxjs/toolkit";

import {
  movieCast,
  movieDetails,
  movieReviews,
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
    movieCast: [],
    movieReviews: [],
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
    builder.addCase(movieCast.fulfilled, (state, action) => {
      state.movieCast = action?.payload?.data?.cast;
    });
    builder.addCase(movieReviews.fulfilled, (state, action) => {
      state.movieReviews = action?.payload?.data?.results;
    });
  },
  reducers: {},
});
