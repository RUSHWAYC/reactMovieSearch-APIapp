import { useEffect, useState } from "react";
import './App.css';
import Search from "./Search";
import Results from "./Results";

const movieapi = 'http://www.omdbapi.com/?i=tt3896198&apikey=e7ec55c';

const App = () => {

    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      searchMovies("Spiderman");
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${movieapi}&s=${title}`);
      const data = await response.json();
  
      setMovies(data.Search);
    };

    return (
        <div className="app">
          <h1>Movie Site</h1>
          <Search searchOnClick={searchMovies}/>
          <Results movieResults={movies}/>
        </div>
      );
    };

export default App;