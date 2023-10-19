import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const usePopularMovies = () => {
  const storeMovies = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', 
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log("popular movies",jsonData)
    dispatch(addPopularMovies(jsonData.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
