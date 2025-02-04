import React from 'react'

const Image = ({
  src = "",
  alt = "",
  srcset = "",
  ...props
}) => {
  return (
    <img src={src} alt={alt} srcSet={srcset} {...props} />
  )
}

export default Image