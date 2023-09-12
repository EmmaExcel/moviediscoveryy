import axios from 'axios';

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

async function FetchM() {
  try {
    const response = await axios.get(apiUrl);
    const top10Movies = response.data.results.slice(0, 10);
    return top10Movies;
   
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }

  
}

export default FetchM;
