import axios from "axios";
import  { useEffect, useState } from "react";

import imdb from "../assets/imdd.svg"
import { Link } from "react-router-dom";

const apiKey = "9e0c3276e2e68fecfe2ff22674628959";

const Card = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} data-testid="movie-card" className="movieCard">
      <div className="movie-image-container">
      <img
        data-testid="movie-poster"
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      </div>
      <p data-testid="movie-release-date" className="movie-date">
        {movie.release_date}
      </p>
      <h3 className="movie-title" data-testid="movie-title">
        {movie.title}
      </h3>
      <div className="movie-rating">
        <img src={imdb} alt="" />
        <p>{movie.vote_average} / 10</p>
      </div>

      <Genres genreIds={movie.genre_ids} />
    </Link>
  );
};

export default Card;

const Genres = ({ genreIds }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        );

        const genreMap = Object.fromEntries(
          response.data.genres.map((genre) => [genre.id, genre.name])
        );

        const movieGenres = genreIds.map((genreId) => genreMap[genreId]);

        setGenres(movieGenres);
      } catch (error) {
        console.error("Error fetching movie genres:", error);
      }
    };

    fetchGenres();
  }, [genreIds]);

  return <p className="movie-genre">{genres.join(", ")}</p>;
};
