import axios from "axios";
import  { useEffect, useState } from "react";
import {AiFillHeart} from "react-icons/ai"

import imdb from "../assets/imdd.svg"
import Favourite from "../assets/Favorite.svg"
import { Link } from "react-router-dom";

const apiKey =  import.meta.env.VITE_REACT_APP_API_KEY;

const Card = ({ movie }) => {
  const [isclicked , setIsClicked] = useState(false);
  const clicked=()=>{
    setIsClicked(!isclicked)
  }
  return (
    <div data-testid="movie-card" className="movieCard">
      <div className="movie-image-container">
      <AiFillHeart onClick={clicked} className={ isclicked?  "redFavourite" : "favourite" }/>
      <img
        data-testid="movie-poster"
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />

     
     
      </div>
      <Link style={{textDecoration: "none"}} to={`/movie/${movie.id}`} className="">
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
      </Link>

      <Genres genreIds={movie.genre_ids} />
    </div>
  );
};

export default Card;

export const Genres = ({ genreIds }) => {
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
