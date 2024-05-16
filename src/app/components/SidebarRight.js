'use client'
import React, { useState } from 'react'

const SidebarRight = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className='sidebar-right'>
      <div
        className={`${
          isHovered ? 'expanded' : 'shrinked'
        } right-0 absolute h-full w-[50px]`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='pt-10 flex '>
          <img
            src='https://www.vhv.rs/dpng/d/573-5734636_group-4-people-png-transparent-png.png'
            className='object-contain h-[20px] pt-[0.6rem] pr-2'
            alt=''
          />
          {isHovered && (
            <p className='font-semibold text-white text-[13px]'>SQUAD</p>
          )}
        </div>
        <div className='flex pt-2 hover:bg-white'>
          <img
            src='https://i.pinimg.com/originals/c1/48/d8/c148d8ab8cb30ade7c008b5a0845b04b.jpg'
            className='object-contain h-[35px]  pr-2'
            alt=''
          />

          {isHovered && (
            <p className='font-semibold text-green-400  text-[10px]'>
              JOIN A SQUAD
            </p>
          )}
        </div>

        <div className='pt-4 flex '>
          <img
            src='https://www.shareicon.net/download/2015/08/23/89467_circle.svg'
            className='object-contain h-[20px] pt-[0.6rem] pr-2'
            alt=''
          />
          {isHovered && (
            <p className='font-semibold text-white text-[13px]'>ACTIVE</p>
          )}
        </div>
        <div className='flex pt-2 hover:bg-white'>
          <img
            src='https://e7.pngegg.com/pngimages/210/4/png-clipart-man-holding-gun-graphic-illustration-red-dead-redemption-2-grand-theft-auto-v-rockstar-games-video-game-others-miscellaneous-microphone.png'
            className='object-contain h-[35px]  pr-2'
            alt=''
          />

          {isHovered && (
            <div>
              <p className='font-semibold text-green-400  text-[10px] m-0'>
                ELVISH KHAN
              </p>
              <p className='font-semibold text-blue-600  text-[8px] m-0'>ONLINE</p>
            </div>
          )}
        </div>

        <div className='pt-4 flex '>
          <img
            src='https://icon-library.com/images/moonphase-full-512.png'
            className='object-contain h-[20px] pt-[0.6rem] pr-2'
            alt=''
          />
          {isHovered && (
            <p className='font-semibold text-white text-[13px]'>OFFLINE</p>
          )}
        </div>
        <div className='flex pt-2 hover:bg-white'>
          <img
            src='https://toppng.com/uploads/preview/red-dead-network-on-twitter-red-dead-redemption-2-sadie-115633487584luz7xxanv.png'
            className='object-contain h-[35px]  pr-2'
            alt=''
          />

          {isHovered && (
            <div>
              <p className='font-semibold text-green-400  text-[10px] m-0'>
                MUHAMMAD YADAV
              </p>
              <p className='font-semibold text-blue-600  text-[8px] m-0'>OFFLINE</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SidebarRight
