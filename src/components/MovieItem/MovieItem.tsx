import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import {
  MovieDescription,
  MovieImg,
  MovieLink,
  MovieList,
  MovieListItem,
  MovieSectionTitle,
  MovieTitle,
} from "./MovieItem.styled";

interface MovieItemProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export const MovieItem: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movieList.movies);
  const sectionTitle = useSelector(
    (state: RootState) => state.movieList.sectionTitle
  );

  return (
    <>
      <MovieSectionTitle>{sectionTitle.toUpperCase()}</MovieSectionTitle>
      <MovieList>
        {movies.map((movie: MovieItemProps) => (
          <MovieListItem key={movie.id}>
            <MovieLink to="/movie">
              <MovieImg
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="300"
                height={Math.round(300 * 1.5)}
              />
              <div>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieDescription>{movie.overview}</MovieDescription>
              </div>
            </MovieLink>
          </MovieListItem>
        ))}
      </MovieList>
    </>
  );
};
