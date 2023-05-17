import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { AppDispatch, RootState } from "@/redux/store";

import { movieReviews } from "../../redux/movieOperations";
import { CastList, CastTitle } from "../Cast/Cast.styled";
import { ReviewTitle, ReviewWrapper } from "./Reviews.styled";

export const Reviews: React.FC = () => {
  const { movieID } = useParams();

  const dispatch: AppDispatch = useDispatch();
  const movie = useSelector((state: RootState) => state.movieList.movieReviews);

  useEffect(() => {
    if (movieID) {
      dispatch(movieReviews(movieID));
    }
  }, [dispatch, movieID]);

  return (
    <section>
      <CastTitle>Reviews</CastTitle>
      <CastList>
        {movie.length > 0 ? (
          movie.map(({ id, author, content, author_details }) => {
            return (
              <li key={id}>
                <ReviewWrapper>
                  <ReviewTitle>Author: {author}</ReviewTitle>
                  <img
                    src={author_details?.avatar_path?.replace("/", "")}
                    alt=""
                  />
                </ReviewWrapper>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <div>No Reviews</div>
        )}
      </CastList>
    </section>
  );
};
// author(pin):"garethmb"
// name(pin):""
// username(pin):"garethmb"
// avatar_path(pin):"/https://secure.gravatar.com/avatar/3593437cbd05cebe0a4ee753965a8ad1.jpg"
// rating(pin):null
