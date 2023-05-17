import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Cast } from "./Cast/Cast";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { MovieList } from "./MovieList/MovieList";
import { Reviews } from "./Review/Reviews";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<MovieList />} />
        <Route path="movie/:movieID" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}
