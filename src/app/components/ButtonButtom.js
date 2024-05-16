import React from 'react'

const ButtonButtom = ({info,value}) => {
  return (
    <div className='custom-button-bottom flex justify-between'>
      <p className='m-0 p-0'>{info}</p>
      <p className='m-0 p-0'>{value}</p>
    </div>
  )
}

export default ButtonButtom
