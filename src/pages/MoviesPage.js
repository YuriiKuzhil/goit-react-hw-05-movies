import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchMovies } from "../services/moviesApi";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handlequeryChange = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = () => {
    if (query.trim() === "") {
      toast.error("Empty query!", {
        style: {
          border: "1px solid #E8301C",
          color: "#E8301C",
        },
      });
      return;
    }
    fetchMovies(query).then((resp) => {
      setMovies(resp.results);
      setQuery("");
    });
  };

  return (
    <div>
      <form>
        <input
          onChange={handlequeryChange}
          name="imageName"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="button" onClick={handleSubmit}>
          Search
        </button>
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
