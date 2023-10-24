import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const movies = useSelector((store) => store.gpt);
  console.log("store movies", movies);
  // const flag = true;
  return (
    <div>
      {movies.gptMovies && (
        <div className=" bg-black bg-opacity-50">
          {movies?.gptSearchedMovieNames?.map((movie, index) => (
            <MovieList
              title={movie}
              movies={movies?.gptMovies[index]}
            ></MovieList>
          ))}
        </div>
      )}
    </div>
  );
};

export default GptMovieSuggestion;
