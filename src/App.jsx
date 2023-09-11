import "./App.css";
import { useState, useEffect } from "react";
import FetchM from "./api/FetchM";
import { Landing } from "./sections/Landing";
import { Featured } from "./sections/Featured";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./sections/MovieDetails";
import { Home } from "./sections/Home";
function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const topMovies = await FetchM();
      setMovies(topMovies);
      setLoading(false);
      console.log(setMovies);
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/movie/:id" element={<MovieDetail/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
