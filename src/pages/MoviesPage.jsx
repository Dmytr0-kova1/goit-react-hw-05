import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";
import { useEffect } from "react";
import { getSearchMovie } from "../service/api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    const getMovie = async () => {
      try {
        setIsLoading(true);

        const { results } = await getSearchMovie(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie();
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <Container>
      <Section>
        <SearchBar onSubmit={handleSubmit} />
        {isLoading ? <Loader /> : <MovieList movies={movies} />}
      </Section>
    </Container>
  );
};

export default MoviesPage;
