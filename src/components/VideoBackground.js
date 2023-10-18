import {  useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieID);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key+"?autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
