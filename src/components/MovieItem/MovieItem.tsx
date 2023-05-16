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
        {movies.map(({ id, title, poster_path, overview }: MovieItemProps) => (
          <MovieListItem key={id}>
            <MovieLink to={`movie/${id}`}>
              <MovieImg
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                width="200"
                height="300"
              />
              <div>
                <MovieTitle>{title}</MovieTitle>
                <MovieDescription>{overview}</MovieDescription>
              </div>
            </MovieLink>
          </MovieListItem>
        ))}
      </MovieList>
    </>
  );
};
