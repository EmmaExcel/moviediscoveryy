import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Sidebar } from "../components/Sidebar";
import star from "../assets/sidebar/Star.png";
import List from "../assets/sidebar/List.svg";
import List2 from "../assets/sidebar/List2.svg";
import TwoTickets from "../assets/sidebar/TwoTickets.svg";
import "../App.css";
import { Genres } from "../components/Card";
import { FloatingMenu } from "../components/FloatingMenu";


const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const MovieDetail = () => {




  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [genres, setGenres] = useState([]);


  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false); // State for toggling the floating menu

const toggleFloatingMenu = () => {
  setIsFloatingMenuOpen(!isFloatingMenuOpen);
}

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
        console.log("Genre Data:", genreData);
        setGenres(genreData);
      } catch (error) {
        console.error("Error fetching movie genres:", error);
      }
    };

    fetchMovieDetails();
    fetchMovieGenres();
  }, [id]);

  if (!movieDetails) {
    return <span className="loader"></span>;
  }

  console.log("Genres:", genres);
  console.log("Poster URL:", movieDetails.poster_path);

  return (
    <>
      <section className="movieDetailSection">
      <Sidebar isFloatingMenuOpen = {isFloatingMenuOpen}/>
      <div className="movieDetailContainer">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
          className="movieDetailPoster"
          alt=""
        />
        <div className="movieDetailLay">
          <div className="movieDetailInfo">
            <div className="movieDetailText">
              <p data-testid="movie-title">{movieDetails.title} ●</p>
              <p data-testid="movie-release-date">{movieDetails.release_date}</p>
              <p data-testid="movie-overview">●{movieDetails.runtime } mins</p>

              <Genres genreIds={movieDetails.genre_ids} />
            </div>

            <div className="movieDetailform">
              <div className="movieDetailOverview">
                <p>{movieDetails.overview}</p>
              </div>

              <div className="movieDetailDirectors">
                <p>
                  Director: <span> Joseph Kosiniki</span>
                </p>
                <p>
                  Writers: <span>Jim cash, Jack epps</span>
                </p>
                <p>
                  Stars: <span>Tom cruise, Jennifer Connely</span>
                </p>

                <div className="movieDetailTopRated">
                  <p>Top rated movie #65</p>
                  <p>Awards 9 nominations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="movieDetailRatingContainer">
            <div className="movieDetailRating">
              <img src={star} alt="" />
              <p className="movieDetailVote">{movieDetails.vote_average}</p>
              <p className="movieDetailCount">|{movieDetails.vote_count}</p>
            </div>

            <div className="movieDetailShow">
              <button>
                <img src={TwoTickets} alt="" /> See Showtimes
              </button>
              <button>
                <img src={List} alt="" />
                More watch options
              </button>
            </div>

            <div className="recommended">
              <div className="recommendedText">
                <img src={List2} alt="" /> The Best Movies and Shows in September
              </div>
            </div>
          </div>
        </div>
      </div>
    <FloatingMenu toggleFloatingMenu={toggleFloatingMenu} isFloatingMenuOpen={isFloatingMenuOpen} />
    </section>

    </>
  );
};

export default MovieDetail;
