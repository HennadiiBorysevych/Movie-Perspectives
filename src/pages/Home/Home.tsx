import React, { Suspense, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import {
  playingNow,
  popularMovies,
  popularTopRated,
  popularUpcoming,
} from "../../redux/movieOperations";
import { AppDispatch } from "../../redux/store";
// import { MovieList } from "../../components/MovieList/MovieList";
import {
  Aside,
  Main,
  MovieHeader,
  MovieHeaderLink,
  MovieImg,
  MovieLink,
} from "./Home.styled";
import logo from "./logo.svg";

export const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(playingNow());
  }, []);

  return (
    <>
      <MovieHeader>
        <MovieHeaderLink to="/">
          <MovieImg src={logo} alt="logo" width="150" height="50" />
        </MovieHeaderLink>
      </MovieHeader>
      <Main>
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
      </Main>
    </>
  );
};
