import React from 'react'

const Map = ({ textTop, textBottom, url }) => {
  return (
    <div className='map'>
      <div className=' overflow-hidden m-0 p-0'>
        <img
          src={url}
          loading='eager'
          alt=''
          className='object-contain w-full h-full m-0 p-0'
        ></img>
      </div>
      <p className='font-semibold text-white text-[10px] m-0 pt-3 text-center'>{textTop}</p>
      <p className='font-semibold text-white text-[10px] m-0 pb-3 text-center'>{textBottom}</p>
    </div>
  )
}

export default Map
