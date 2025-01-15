import { useEffect, useState } from "react";
import { getReviewsMovie } from "../../service/api";
import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";
import Loader from "../Loader/Loader";
import ReviewsCard from "../ReviewsCard/ReviewsCard";

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
              <ReviewsCard key={review.id} review={review} />
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
