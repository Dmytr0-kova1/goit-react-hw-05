import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { getTrendingMovie } from "../service/api";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLOading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const renderMovie = async () => {
      try {
        setIsLOading(true);

        const { results } = await getTrendingMovie();
        setMovies(results);
      } catch (_) {
        setIsError(true);
      } finally {
        setIsLOading(false);
      }
    };
    renderMovie();
  }, []);

  return (
    <Container>
      <Section>
        {isError ? <ErrorMessage /> : <h2>Trending today</h2>}
        {isLoading && <Loader />}
        {movies.length > 0 && <MovieList movies={movies} />}
      </Section>
    </Container>
  );
};

export default HomePage;
