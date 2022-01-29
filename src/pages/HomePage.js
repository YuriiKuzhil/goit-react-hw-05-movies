import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { fetchTrendingMovies } from "../services/moviesApi";
import PageTitle from "../components/PageTitle";
import ButtonLoadMore from "../components/ButtonLoadMore";
import Loader from "../components/Loader";
import TrendingMoviesList from "../components/TrendingMoviesList";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTrendingMovies(page);

        data.total_pages === page ? setShowButton(false) : setShowButton(true);

        page === 1
          ? setTrendingMovies(data.results)
          : setTrendingMovies((state) => [...state, ...data.results]);
      } catch {
        toast.error("Something wrong!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [page]);

  const handelLoadMore = () => {
    setPage((state) => state + 1);
  };

  return (
    <div>
      <PageTitle text="Trending Movies for the week" />

      <TrendingMoviesList trendingMovies={trendingMovies} />

      {isLoading ? (
        <Loader />
      ) : (
        showButton && <ButtonLoadMore onloadMore={handelLoadMore} />
      )}
    </div>
  );
}
