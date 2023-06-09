import { TextField } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { movieSearch } from "../../redux/movieOperations";
import { AppDispatch } from "../../redux/store";
import {
  Main,
  MovieHeader,
  MovieHeaderLink,
  MovieImg,
  SearchWrapper,
} from "./Home.styled";
import logo from "./logo.svg";

const labelProps = {
  style: {
    color: "#f5c518",
    fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace",
  },
};
const inputProps = {
  style: {
    color: "#f5c518",
    fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace",
    borderLeft: "7px solid #f5c518",
  },
};

export const Home: React.FC = () => {
  const [movieSearchFilter, setMovieSearch] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (movieSearchFilter) {
      dispatch(movieSearch(movieSearchFilter));
    }
  }, [dispatch, movieSearchFilter]);

  const handleMovieSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMovieSearch(value);
  };
  return (
    <>
      <MovieHeader>
        <MovieHeaderLink to="/">
          <MovieImg src={logo} alt="logo" width="150" height="55" />
        </MovieHeaderLink>
        <SearchWrapper>
          <TextField
            fullWidth
            InputLabelProps={labelProps}
            inputProps={inputProps}
            id="filled-basic"
            label="Movie Search"
            variant="filled"
            onChange={handleMovieSearch}
          />
        </SearchWrapper>
      </MovieHeader>
      <Main>
        <Suspense
          fallback={<ThreeCircles height="100" width="100" color="#4fa94d" />}
        >
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
