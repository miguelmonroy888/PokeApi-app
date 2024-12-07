import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Pokemon } from "./Pokemon";
import { Favorites } from "./Favorites";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};