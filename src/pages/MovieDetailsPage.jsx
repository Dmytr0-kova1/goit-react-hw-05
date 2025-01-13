import { useEffect, useState } from "react";
import { getDetailsMovie } from "../service/api";
import { useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import MovieCard from "../components/MovieCard/MovieCard";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const renderMovie = async () => {
      try {
        const res = await getDetailsMovie(movieId);

        setMovie(res);
      } catch (error) {
        console.log(error);
      }
    };

    renderMovie();
  }, [movieId]);

  return (
    <Container>
      <Section>
        <MovieCard movie={movie} />
      </Section>
    </Container>
  );
};

export default MovieDetailsPage;
