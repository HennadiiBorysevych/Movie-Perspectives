import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { PlayingNow } from "./PlayingNow/PlayingNow";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<PlayingNow />} />
      </Route>
    </Routes>
  );
}
