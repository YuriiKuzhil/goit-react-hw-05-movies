import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../services/moviesApi";
import Loader from "../Loader";
import {
  MovieCard,
  Images,
  Title,
  Span,
  Text,
  TitleText,
  GenresList,
  Item,
} from "./MovieDetails.styled";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const ImgBaseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMoviesById(movieId);
        setMovie(data);
      } catch {
        toast.error("Something wrong!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return isLoading ? (
    <Loader />
  ) : (
    !!movie && (
      <MovieCard>
        <Images src={`${ImgBaseURL}/${movie.poster_path}`} alt={movie.title} />
        <div>
          <Title>{movie.title}</Title>
          <Text>
            <Span>Vote/Votes:</Span> {movie.vote_average} / {movie.vote_count}
          </Text>
          <TitleText>Overview</TitleText>
          <Text>{movie.overview}</Text>
          <TitleText>Genres</TitleText>
          <GenresList>
            {movie.genres.map((item) => (
              <Item key={item.id}>{item.name}</Item>
            ))}
          </GenresList>
          <TitleText>Additional information</TitleText>
          <ul>
            <Item>
              <Link to="cast">Cast</Link>
            </Item>
            <Item>
              <Link to="reviews">Reviews</Link>
            </Item>
          </ul>
        </div>
      </MovieCard>
    )
  );
}
