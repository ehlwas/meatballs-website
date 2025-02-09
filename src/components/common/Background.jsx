import React, { useRef } from 'react'

const Background = () => {
  const videoRef = useRef(null)

  const handleChangePlayback = () => {
    videoRef.current.playbackRate = 0.4
  }
  
  return (
    <div className="bg-container">
      <video ref={videoRef} onLoadedMetadata={handleChangePlayback} autoPlay loop muted>
        <source src="/assets/videos/bgvideo.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Background