import React from 'react'
// import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const VideoTitle = ({title,description}) => {

  return (
    <div className="bg-gradient-to-r from-black w-screen aspect-video absolute opacity-95">
      <div className="title-container ml-10 p-6 absolute top-28 opacity-95 text-white ">
        <h1 className="text-4xl font-bold my-6">{title}</h1>
        <p className="w-[25%] font-semibold">{description}</p>

        <div className="bottom-buttons my-4 font-semibold">
          <button className="mt-4 bg-white px-6 py-3 text-black hover:opacity-75  rounded-md">
            Play
          </button>
          <button className="ml-4 px-6 py-3 bg-gray-700 text-white hover:opacity-50 rounded-md ">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle
