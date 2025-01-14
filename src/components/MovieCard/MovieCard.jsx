import { NavLink, Outlet } from "react-router-dom";
import s from "./MovieCard.module.css";
import clsx from "clsx";

const MovieCard = ({ movie }) => {
  const {
    poster_path,
    title,
    original_title,
    vote_average,
    release_date,
    overview,
    genres,
  } = movie;

  const dataYear = new Date(release_date).getFullYear();

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.img}>
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={title}
          />
        </div>
        <div className={s.details}>
          <h2>
            {original_title} ({dataYear})
          </h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && (
            <ul className={s.list}>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={s.info}>
        <p className={s.text}>Additional information</p>
        <nav className={s.nav}>
          <NavLink className={buildLinkClass} to="cast">
            Cast
          </NavLink>
          <NavLink className={buildLinkClass} to="reviews">
            Reviews
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default MovieCard;
