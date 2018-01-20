import React from 'react'
import './arrowLeft.css'

const ArrowLeft = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}>
    </div>
  )
}

export default ArrowLeft