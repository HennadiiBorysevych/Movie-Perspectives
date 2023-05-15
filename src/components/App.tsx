import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { MovieList } from "./MovieList/MovieList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<MovieList />} />
      </Route>
    </Routes>
  );
}
