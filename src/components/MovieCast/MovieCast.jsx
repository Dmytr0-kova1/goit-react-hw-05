import { useEffect, useState } from "react";
import { getCreditsMovie } from "../../service/api";
import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";

const imgDefault =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*SJK2HbUdlFq5LRvPSRqjbw.png";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await getCreditsMovie(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <ul className={s.list}>
      {cast.map((actor) => (
        <li className={s.item} key={actor.id}>
          <div>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : imgDefault
              }
              alt={actor.name}
            />
          </div>
          <div className={s.details}>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
