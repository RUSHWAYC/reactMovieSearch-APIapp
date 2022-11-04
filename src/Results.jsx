import React from "react";
import './App.css';
import MovieCard from "./MovieCard";

const Results = ( {movieResults} ) => {

    return (
        <div>
          {movieResults?.length > 0 ? (
            <div className="container">
              {movieResults.map((movie) => (
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
    )

}

export default Results;