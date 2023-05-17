import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { AppDispatch, RootState } from "@/redux/store";

import { movieReviews } from "../../redux/movieOperations";
import { CastList, CastTitle, ReviewTitle } from "../Cast/Cast.styled";

export const Reviews = () => {
  const { movieId } = useParams();

  const dispatch: AppDispatch = useDispatch();
  const movie = useSelector((state: RootState) => state.movieList.movieReviews);

  useEffect(() => {
    if (movieId) {
      dispatch(movieReviews(movieId));
    }
  }, [dispatch, movieId]);

  return (
    <section>
      <CastTitle>Reviews</CastTitle>
      <CastList>
        {movie.length > 0 ? (
          movie.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <ReviewTitle>Author: {author}</ReviewTitle>
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
