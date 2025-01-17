import s from "./MovieItem.module.css";

const imgDefault =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MovieItem = ({ movie }) => {
  return (
    <>
      <li className={s.item}>
        <img
          className={s.img}
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : imgDefault
          }
          alt={movie.title}
        />
        <h3 className={s.title}> {movie.original_title}</h3>
      </li>
    </>
  );
};

export default MovieItem;
