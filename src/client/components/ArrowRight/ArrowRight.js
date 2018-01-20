import React from 'react'
import './arrowRight.css'

const ArrowRight = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}>
    </div>
  )
}

export default ArrowRight