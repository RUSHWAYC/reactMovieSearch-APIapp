import { useEffect, useState } from "react";
import './App.css';
// import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
import Search from "./Search";

const movieapi = 'http://www.omdbapi.com/?i=tt3896198&apikey=e7ec55c';

const App = () => {
//    const [searchTerm, setSearchTerm] = useState("");
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

          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <div key={movie.imdbID}>
                    <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      );
    };

export default App;