import React from 'react'

const Button = ({
  className = '',
  children,
  loading = false,
  ...props
}) => {

  return (
    <button className={`border-white rounded-full min-w-[100px] px-5 py-1 border ${className}`}>
      {children}
    </button>
  )
}

export default Button