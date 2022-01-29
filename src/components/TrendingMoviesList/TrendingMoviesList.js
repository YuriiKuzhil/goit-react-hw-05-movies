import PropTypes from "prop-types";
import TrendingMoviesItem from "./TrendingMoviesItem/TrendingMoviesItem";
import { List } from "./TrendingMoviesList.styled";

export default function TrendingMoviesList({ trendingMovies }) {
  return (
    <List>
      {trendingMovies.map((item) => (
        <TrendingMoviesItem key={item.id} id={item.id} title={item.title} />
      ))}
    </List>
  );
}
TrendingMoviesList.propTypes = {
  trendingMovies: PropTypes.array.isRequired,
};
