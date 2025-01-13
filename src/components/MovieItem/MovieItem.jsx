import { Link } from "react-router-dom";
import s from "./MovieItem.module.css";

const MovieItem = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <li className={s.item}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
          alt={movie.title}
        />
        <h3 className={s.title}> {movie.original_title}</h3>
      </li>
    </Link>
  );
};

export default MovieItem;
