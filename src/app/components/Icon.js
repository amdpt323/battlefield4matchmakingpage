'use client'
import React, { useState } from 'react'

const Icon = ({ url, sideText }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  return (
    <div
      className='icon px-3 py-1 h-[40px] '
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={url}
        loading='eager'
        alt=''
        className='w-full h-full m-0 p-0'
      ></img>

      {isHovered && (
        <div className='absolute top-auto left-12 ml-2 px-2 py-1 rounded bg-black text-white text-[10px]'>
          {sideText}
        </div>
      )}
    </div>
  )
}

export default Icon
