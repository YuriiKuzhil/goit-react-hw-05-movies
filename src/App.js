import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
