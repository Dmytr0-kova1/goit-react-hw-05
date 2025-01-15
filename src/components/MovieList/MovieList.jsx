import MovieItem from "../MovieItem/MovieItem";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul className={s.list}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
