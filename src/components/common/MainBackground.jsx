import React, { useRef } from 'react'

const MainBackground = () => {
  const videoRef = useRef(null)

  const handleChangePlayback = () => {
    return
    videoRef.current.playbackRate = 0.4
  }
  
  return (
    <div className="bg-container">
      <video ref={videoRef} onLoadedMetadata={handleChangePlayback} autoPlay loop muted>
        <source src="/assets/videos/bgvideo2.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default MainBackground