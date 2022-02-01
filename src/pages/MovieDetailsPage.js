import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import MovieDetails from "../components/MovieDetails";
import Loader from "../components/Loader";
export default function MovieDetailsPage() {
  return (
    <>
      <MovieDetails />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
