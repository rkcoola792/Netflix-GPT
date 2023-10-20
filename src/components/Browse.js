import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Browse = () => {
useNowPlayingMovies();
 
const showGptSearch=useSelector(store=>store.gpt.initialState)
console.log(showGptSearch)
  return (
    <div>
      
      <Header></Header>

      {showGptSearch ? (
        <GptSearch />
      ) : ( 
        <>
        <MainContainer />
        <SecondaryContainer /> 
        </>
       )}
    </div>
  );
}

export default Browse
