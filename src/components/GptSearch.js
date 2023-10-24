import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { MAIN_BACKGROUND_IMAGE } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <img
        className="main-img fixed -z-10"
        src={MAIN_BACKGROUND_IMAGE}
      ></img>
      <div className="pt-24">
        <GptSearchBar></GptSearchBar>
        <GptMovieSuggestion></GptMovieSuggestion>
      </div>
    </div>
  );
}

export default GptSearch
