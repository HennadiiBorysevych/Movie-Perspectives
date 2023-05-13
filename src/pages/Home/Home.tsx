import React, { Suspense } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Outlet } from "react-router-dom";

import {
  Aside,
  Main,
  MovieHeader,
  MovieHeaderLink,
  MovieLink,
} from "./Home.styled";

export const Home: React.FC = () => {
  return (
    <>
      <MovieHeader>
        <MovieHeaderLink to="/">Movie.Perspective</MovieHeaderLink>
      </MovieHeader>
      <Main>
        <Aside>
          <nav>
            <ul>
              <li>
                <MovieLink to="/now">Now Playing</MovieLink>
              </li>
              <li>
                <MovieLink to="/popular">Populap</MovieLink>
              </li>
              <li>
                <MovieLink to="/rated">TopRated</MovieLink>
              </li>
              <li>
                <MovieLink to="/upcoming">Upcoming</MovieLink>
              </li>
            </ul>
          </nav>
        </Aside>
      </Main>
      <Suspense
        fallback={
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
