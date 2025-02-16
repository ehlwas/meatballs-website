import React, { useRef } from 'react'

const BackgroundVideo = ({
  src = '',
}) => {
  
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-1">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

export default BackgroundVideo