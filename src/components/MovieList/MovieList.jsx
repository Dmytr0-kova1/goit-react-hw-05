import { Link, useLocation } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={s.list}>
        {movies.map((movie) => (
          <Link key={movie.id} state={location} to={`/movies/${movie.id}`}>
            <MovieItem movie={movie} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
