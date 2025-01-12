import MovieItem from "../MovieItem/MovieItem";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2 className={s.title}>Trending today</h2>
      <ul className={s.list}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
