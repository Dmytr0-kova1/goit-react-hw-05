import { useEffect, useRef, useState } from "react";
import { getDetailsMovie } from "../../service/api";
import { NavLink, useLocation, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";
import s from "./MovieDetailsPage.module.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");

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
      <Section>
        <NavLink className={s.linkBtm} to={backLinkHref.current}>
          <FaArrowAltCircleLeft size={18} />
          Go back
        </NavLink>
        {isLoading ? (
          <Loader />
        ) : (
          <MovieCard movie={movie} backLinkHref={backLinkHref} />
        )}
      </Section>
    </Container>
  );
};

export default MovieDetailsPage;
