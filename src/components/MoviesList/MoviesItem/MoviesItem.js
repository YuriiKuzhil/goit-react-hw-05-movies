import PropTypes from "prop-types";
import { Item, StyledLink } from "./MoviesItem.styled";
import { useLocation } from "react-router-dom";

export default function TrendingMoviesItem({ id, title }) {
  const location = useLocation();
  return (
    <Item>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </StyledLink>
    </Item>
  );
}
TrendingMoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
