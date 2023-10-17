import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  // subscribing to the store
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  console.log("Inside maincontainer ", movies);

  if (!movies) return;
  const mainMovie = movies[0];
  console.log("Main movie", mainMovie);
  const {original_title,overview}=mainMovie;
  return (
    <div>
      <VideoBackground />
      <VideoTitle title={original_title} description={overview} ></VideoTitle>
    </div>
  );
}

export default MainContainer
