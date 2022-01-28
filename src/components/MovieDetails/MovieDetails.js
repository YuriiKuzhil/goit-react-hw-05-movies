import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../services/moviesApi";
import { MovieCard, Images } from "./MovieDetails.styled";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const ImgBaseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);

  return (
    !!movie && (
      <MovieCard>
        <Images src={`${ImgBaseURL}/${movie.poster_path}`} alt={movie.title} />
        <div>
          <h2>{movie.title}</h2>
          <p>
            Vote/Votes: {movie.vote_average} / {movie.vote_count}
          </p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
          <h3>Additional information</h3>
          <ul>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </ul>
        </div>
      </MovieCard>
    )
  );
}
