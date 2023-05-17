import React, { Suspense, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";

import { movieDetails } from "../../redux/movieOperations";
import { AppDispatch, RootState } from "../../redux/store";
import {
  DetailsWrapper,
  Link,
  MovieInfo,
  MovieSection,
  Wrapper,
} from "./MovieDetails.styled";

export const MovieDetails = () => {
  const dispatch: AppDispatch = useDispatch();

  const movies = useSelector(
    (state: RootState) => state.movieList.movieDetails
  );

  const { movieID } = useParams();

  useEffect(() => {
    if (movieID) {
      dispatch(movieDetails(movieID));
    }
  }, [dispatch, movieID]);

  return (
    <MovieSection>
      <DetailsWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          alt={movies.title}
          width="350"
          height="400"
        />
        <MovieInfo>
          <h2>{movies.title}</h2>
          <p>{movies.overview}</p>
          <p>Release Date: {movies.release_date}</p>
          <p> IMDB rating:{movies.vote_average?.toFixed(2)}</p>
          <p>Box Office: {(movies.revenue / 1000000)?.toFixed(2)}M $</p>
          <p>Duration: {movies.runtime / 60} hours</p>
          <p>Original language: {movies.original_language?.toUpperCase()}</p>
          <p>Slogan: {movies.tagline}</p>
          <Wrapper>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </Wrapper>
        </MovieInfo>
      </DetailsWrapper>
      <ul>
        <Suspense
          fallback={
            <ThreeCircles
              height="100"
              width="100"
              color="#4fa94d"
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </ul>
    </MovieSection>
  );
};
