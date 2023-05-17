import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  playingNow,
  popularMovies,
  popularTopRated,
  popularUpcoming,
} from "@/redux/movieOperations";
import { AppDispatch } from "@/redux/store";

import { MovieItem } from "../MovieItem/MovieItem";
import { Aside, MovieLink } from "./MovieList.styled";

export const MovieList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(playingNow());
  }, [dispatch]);

  return (
    <>
      <Aside>
        <nav>
          <ul>
            <li>
              <MovieLink type="button" onClick={() => dispatch(playingNow())}>
                Now Playing
              </MovieLink>
            </li>
            <li>
              <MovieLink
                type="button"
                onClick={() => dispatch(popularMovies())}
              >
                Popular
              </MovieLink>
            </li>
            <li>
              <MovieLink
                type="button"
                onClick={() => dispatch(popularTopRated())}
              >
                Top Rated
              </MovieLink>
            </li>
            <li>
              <MovieLink
                type="button"
                onClick={() => dispatch(popularUpcoming())}
              >
                Upcoming
              </MovieLink>
            </li>
          </ul>
        </nav>
      </Aside>
      <section>
        <MovieItem />
      </section>
    </>
  );
};
