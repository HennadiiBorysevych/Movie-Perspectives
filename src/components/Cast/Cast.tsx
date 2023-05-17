import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { movieCast } from "@/redux/movieOperations";
import { AppDispatch, RootState } from "@/redux/store";

import { CastItem, CastList } from "./Cast.styled";

export const Cast: React.FC = () => {
  const { movieID } = useParams();

  const dispatch: AppDispatch = useDispatch();
  const movie = useSelector((state: RootState) => state.movieList.movieCast);

  useEffect(() => {
    if (movieID) {
      dispatch(movieCast(movieID));
    }
  }, [dispatch, movieID]);

  return (
    <CastList>
      {movie.map(({ id, name, character, profile_path }) => (
        <CastItem key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
            width="150"
          />
          <p>Actor Name: {name}</p>
          <p>Character Name: {character}</p>
        </CastItem>
      ))}
    </CastList>
  );
};
