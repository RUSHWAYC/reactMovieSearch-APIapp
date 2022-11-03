import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const movieapi = 'http://www.omdbapi.com/?i=tt3896198&apikey=e7ec55c';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${movieapi}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    }

    const movie1 = {
        "Title": "Spiderman and Grandma",
        "Year": "2009",
        "imdbID": "tt1433184",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>MovieSite</h1>
            <div className="search">
                <input
                    placeholder="Search"
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>
            <div className="container">
                <MovieCard movie={movie1}/>
            </div>
        </div>
    );
}

export default App;

//e7ec55c
//test2