import tv from "../assets/navbar/tv.svg";
import Home from "../assets/sidebar/Home.svg";
import MovieProjector from "../assets/sidebar/MovieProjector.svg";
import Calendar from "../assets/sidebar/Calendar.svg";
import Tvshow from "../assets/sidebar/TvShow.svg";
import Logout from "../assets/sidebar/Logout.svg";
export const Sidebar = () => {
  return (
    <>
      <div className="sidebarContainer">
        <div className="sidebarHeader">
          <img src={tv} alt="" />
          <p>MovieBox</p>
        </div>

        <nav className="sidebarNav">
          <div className="sidebarLink">
            <img src={Home} alt="" />
            <p>Home</p>
          </div>

          <div className="sidebarLink">
            <img src={MovieProjector} alt="" />
            <p>Movies</p>
          </div>

          <div className="sidebarLink">
            <img src={Tvshow} alt="" />
            <p>TV Series</p>
          </div>

          <div className="sidebarLink">
            <img src={Calendar} alt="" />
            <p>Upcoming</p>
          </div>

          <div className="playing">
            <p>Play movie quizes and earn free tickets</p>

            <p>50k people are playing now</p>

            <button>start playing</button>
          </div>

          <div className="sidebarLink">
            <img src={Logout} alt="" />
            <p>Log out</p>
          </div>
        </nav>
      </div>
    </>
  );
};
