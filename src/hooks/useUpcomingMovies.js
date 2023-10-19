import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const useUpcomingMovies = () => {
  const storeMovies = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log("popular movies",jsonData)
    dispatch(addUpcomingMovies(jsonData.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
