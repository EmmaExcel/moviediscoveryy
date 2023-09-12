import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import imdblogo from "../assets/imdd.svg";
import play from "../assets/play.svg";
import axios from "axios";

export const Landing = () => {
  const [movieData, setMovieData] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("initial-image.jpg");

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const apiKey = "9e0c3276e2e68fecfe2ff22674628959"; // Replace with your actual TMDB API key
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
        const popularMovies = response.data.results;
        const randomMovie =
          popularMovies[Math.floor(Math.random() * popularMovies.length)];
        setMovieData(randomMovie);

        setBackgroundImage(
          `https://image.tmdb.org/t/p/original/${
            randomMovie.poster_path
          }?t=${Date.now()}`
        );
      } catch (error) {
        console.error("Error fetching random movie:", error);
      }
    };

    fetchRandomMovie();

    const intervalId = setInterval(fetchRandomMovie, 10000);

    return () => clearInterval(intervalId);
  }, []);


  const backgroundStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.734), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    transition: "background-image 2s",
   
  };

  return (
    <>
      <section className="landingSection">
        <div
          style={backgroundStyle}
          className="landingContainer"
        >
          
          <Navbar />
          <div className="landingMovieContainer">
            <div className="landingMovieInfo">
              {movieData && (
                <>
                  <h1>{movieData.title}</h1>
                  <div className="LandingRating">
                    <img src={imdblogo} alt="" />
                    <p>{movieData.vote_average} / 10</p>
                  </div>
                  <p className="landingOverview">{movieData.overview}</p>
                  <a className="landingtrailer">
                    <img src={play} alt="" />
                    <p>WATCH TRAILER</p>
                  </a>
                </>
              )}
            </div>
            <div className="pagination">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
