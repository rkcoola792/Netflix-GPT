import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState:{
    showGptSearch:false,
    gptMovies:null,
    gptSearchedMovieNames:null
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.initialState=!state.initialState
    //   state.showGptSearch=!state.showGptSearch
    },
    addGptMovieResult: (state, action) => {
      state.gptMovies=action.payload
    },
    addGptSearchedMovieNames: (state, action) => {
      state.gptSearchedMovieNames=action.payload
    },
  },
});
export  const { toggleGptSearchView, addGptMovieResult, addGptSearchedMovieNames } =
  gptSlice.actions;
export default gptSlice.reducer;