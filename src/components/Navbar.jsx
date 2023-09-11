import "../components.css";
import { Search } from "./Search";
import tv from "../assets/navbar/tv.svg";
import menu from "../assets/navbar/Menu.svg";

export const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navLogo">
        <img src={tv} alt="" />
        <p>MovieBox</p>
      </div>

      <Search />

      <div className="navSign">
        <p>Sign in</p>
        <img src={menu} alt="" />
      </div>
    </div>
  );
};


