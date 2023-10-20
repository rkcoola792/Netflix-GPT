import React from 'react'

const MovieCard = ({cardImg}) => {
  return (
    <div className="flex w-40 pr-1 ">
      <img
        className="hover:scale-125 transition duration-100 ease-out hover:ease-in "
        src={"https://image.tmdb.org/t/p/w500/" + cardImg}
      ></img>
    </div>
  );
}

export default MovieCard
