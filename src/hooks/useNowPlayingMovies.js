import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const storeMovies = useSelector((store) => store.movies);
  // console.log("storeomvies", storeMovies);
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    console.log("aPI movies", jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
