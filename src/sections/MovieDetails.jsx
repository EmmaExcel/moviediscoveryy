import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Sidebar } from "../components/Sidebar";
import star from "../assets/sidebar/Star.png";
const apiKey = "9e0c3276e2e68fecfe2ff22674628959";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        const data = response.data;
        console.log("Movie Details Response:", data);
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchMovieGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/genres?api_key=${apiKey}&language=en-US`
        );
        const genreData = response.data.genres;

        setGenres(genreData);
      } catch (error) {
        console.error("Error fetching movie genres:", error);
      }
    };

    fetchMovieDetails();
    fetchMovieGenres();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <section className="movieDetailSection">
      <Sidebar />
      <div className="movieDetailContainer">
        <img
          src={movieDetails.poster_path}
          className="movieDetailPoster"
          alt=""
        />
        <div className="movieDetailInfo">
          <div className="movieDetailText">
            <p>{movieDetails.title} ●</p>
            <p>{movieDetails.release_date}</p>
            <p>●{Math.floor(movieDetails.runtime / 60)} h</p>
            <ul>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>

          <div className="movieDetailRating">
            <img src={star} alt="" />
            <p>{movieDetails.vote_average}</p>
            <p>|{movieDetails.vote_count}</p>
          </div>
        </div>

        <div className="">
          <div className="">
            <p>{movieDetails.overview}</p>
          </div>
          <div className="">
            <button>See Showtimes</button>
            <button>More watch options</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
