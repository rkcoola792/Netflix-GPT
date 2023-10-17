import React from 'react'

const VideoTitle = ({title,description}) => {

    console.log("title movie and desc",title,description)
  return (
    <div className='title-container mt-44 ml-40 p-6'>
       <h1>{title}</h1>
      <p>{description}</p>

      <div className='bottom-buttons'>
        <button>Play</button>
        <button>More Info</button>
        

      </div> 
    </div>
  )
}

export default VideoTitle
