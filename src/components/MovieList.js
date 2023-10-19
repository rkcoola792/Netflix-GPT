import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log("Movies", movies, title);
  return (
    <div className="pt-4 px-8">
      <h1 className="text-white text-3xl py-4">{title}</h1>
      <div className="flex  pt-2 overflow-y-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((ele) => (
            <MovieCard key={movies.id} cardImg={ele.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
