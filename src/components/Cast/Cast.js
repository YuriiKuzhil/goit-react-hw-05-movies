import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCastByMovieId } from "../../services/moviesApi";
import CastItem from "./CastItem/CastItem";
import { CastList } from "./Cast.styled";

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const ImgBaseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetchCastByMovieId(movieId).then((item) => {
      setCast(item.cast);
    });
  }, [movieId]);

  return (
    !!cast && (
      <CastList>
        {cast.map(({ id, name, character, profile_path }) => (
          <CastItem
            key={id}
            name={name}
            character={character}
            imageUrl={`${ImgBaseURL}/${profile_path}`}
          />
        ))}
      </CastList>
    )
  );
}
