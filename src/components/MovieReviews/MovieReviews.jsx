import { useEffect, useState } from "react";
import { getReviewsMovie } from "../../service/api";
import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";
import Loader from "../Loader/Loader";

const imgDefault =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getReviews = async () => {
      try {
        setIsLoading(true);

        const { results } = await getReviewsMovie(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={s.list}>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <li className={s.item} key={review.id}>
                <div className={s.container}>
                  <div className={s.avatar}>
                    <img
                      className={s.img}
                      src={
                        review.author_details.avatar_path
                          ? `https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`
                          : imgDefault
                      }
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <h3>{review.author}</h3>
                  </div>
                </div>
                <div className={s.content}>
                  <p>{review.content}</p>
                </div>
              </li>
            ))
          ) : (
            <p>We don`t have any reviews for this movie.</p>
          )}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
