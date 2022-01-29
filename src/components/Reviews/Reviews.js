import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchReviewsByMovieId } from "../../services/moviesApi";
import ReviewsItem from "./ReviewsItem/ReviewsItem";
export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await fetchReviewsByMovieId(movieId);
        setReviews(data.results);
      } catch {
        toast.error("Something wrong!");
      }
    };
    fetchReviews();
    //  fetchReviewsByMovieId(movieId).then((item) => {
    //    setReviews(item.results);
    // });
  }, [movieId]);

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <ReviewsItem key={id} author={author} content={content} />
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
}
