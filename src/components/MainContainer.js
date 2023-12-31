import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  // subscribing to the store
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  console.log("hey" , movies)
  if (!movies) return <></>;
  const mainMovie = movies[10];
  const {original_title,overview,id}=mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} description={overview} ></VideoTitle>
      <VideoBackground movieID={id}/>
    </div>
  );
}

export default MainContainer
