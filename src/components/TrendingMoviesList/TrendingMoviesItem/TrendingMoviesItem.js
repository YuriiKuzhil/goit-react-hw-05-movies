import PropTypes from "prop-types";
import { Item, StyledLink } from "./TrendingMoviesItem.styled";

export default function TrendingMoviesItem({ id, title }) {
  return (
    <Item>
      <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
    </Item>
  );
}
TrendingMoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
