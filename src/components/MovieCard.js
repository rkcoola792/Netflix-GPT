import React from 'react'

const MovieCard = ({cardImg}) => {
  return (
    <div className='flex w-64 pr-1'>
      <img
        src={
          "https://image.tmdb.org/t/p/w500/" +
          cardImg
        }
      ></img>
    </div>
  );
}

export default MovieCard
