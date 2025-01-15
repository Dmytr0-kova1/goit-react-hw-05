import { useEffect, useState } from "react";
import { getDetailsMovie } from "../service/api";
import { useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import MovieCard from "../components/MovieCard/MovieCard";
import Loader from "../components/Loader/Loader";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const renderMovie = async () => {
      try {
        setIsLoading(true);

        const res = await getDetailsMovie(movieId);
        setMovie(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    renderMovie();
  }, [movieId]);

  return (
    <Container>
      <Section>{isLoading ? <Loader /> : <MovieCard movie={movie} />}</Section>
    </Container>
  );
};

export default MovieDetailsPage;
