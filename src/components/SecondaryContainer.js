import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { usePopularMovies } from '../hooks/usePopularMovies'
import { useTopRatedMovies } from '../hooks/useTopRatedMovies'
import { useUpcomingMovies } from '../hooks/useUpcomingMovies'

const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies=useSelector(store=>store.movies)
  console.log("poupluar moves",movies.popularMovies)
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black ">
        <div className="-mt-44 relative z-40">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Top-Rated" movies={movies.topRatedMovies} />
          <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
}

export default SecondaryContainer
