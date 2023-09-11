import "../components.css";
import search from "../assets/navbar/search.svg";
export const Search = () => {
  return (
    <div className="searchContainer">
      <input type="text" placeholder="What do you want to watch?" />
      <img src={search} alt="" />
    </div>
  );
};
