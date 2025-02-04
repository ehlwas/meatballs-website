import React from 'react'

const Backgound = () => {
  return (
    <div className="bg-container">
      <video autoPlay loop muted>
        <source src="/assets/videos/bgvideo.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Backgound