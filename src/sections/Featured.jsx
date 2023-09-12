import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export const Featured = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
        );
        const movieData = response.data.results;

        setMovies(movieData);

        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const featuredMovies = movies.slice(0, 10);
  return (
    <section className="featureSection">
      <div className="featureContainer">
        <div className="featureHeader">
          <p>Featured Movie</p>
          <a href="">See more {">"} </a>
        </div>

        <div className="featuredList">
          {featuredMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

