import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
export const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movieID +"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json(data);
    const filteredData = json.results.filter((ele) => ele.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
