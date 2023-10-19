import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const useTopRatedMovies = () => {
  const storeMovies = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log("popular movies",jsonData)
    dispatch(addTopRatedMovies(jsonData.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
