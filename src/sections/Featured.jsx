import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const apiKey = "9e0c3276e2e68fecfe2ff22674628959";

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

