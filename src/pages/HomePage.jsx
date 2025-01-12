import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { getTrendingMovie } from "../service/api";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const renderMovie = async () => {
      try {
        const { results } = await getTrendingMovie();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    renderMovie();
  }, []);

  return (
    <Container>
      <Section>
        <MovieList movies={movies} />
      </Section>
    </Container>
  );
};

export default HomePage;
