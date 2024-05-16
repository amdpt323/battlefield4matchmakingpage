import React from 'react'
import Icon from './Icon'

const SidebarLeft = () => {
  const icons = [
    {
      url: 'https://preview.redd.it/killjoy-and-raze-icons-by-me-v0-1f2eowb7tq9b1.jpg?width=4167&format=pjpg&auto=webp&s=c09480f219af5e3394ec819e0d2256fd39ceb5e1',
      sideText: 'RAZE',
    },
    {
      url: 'https://preview.redd.it/deadlock-icon-fanart-v0-2rief1x1vgib1.png?width=2000&format=png&auto=webp&s=d780a0adcdfe0f0181c5592c4ab0befce5762f1f',
      sideText: 'DEADLOCK',
    },
    {
      url: 'https://64.media.tumblr.com/6396a992514f9377c744b6345fda5a7c/f8bf774a4e3029cb-41/s640x960/2c1321ae3ada9a6742d5a963ab0e35ed2a14e70e.jpg',
      sideText: 'SOVA',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1n2NsGZiylhGsmNo1SFZIApN_jOcxDcm6DndC9HaPMGoVFR7hx8GWog5_uXwhEDRNbIM&usqp=CAU',
      sideText: 'VIPER',
    },
    {
      url: 'https://pbs.twimg.com/media/E9UgnehWYAQC3M_.jpg',
      sideText: 'JETT',
    },
  ]
  return (
    <div className='sidebar-left'>
      <div className='flex flex-col pt-[8rem]'>
        {icons.map((item, index) => {
          return <Icon key={index} {...item} />
        })}
      </div>
      <div className='pt-4'>
        <Icon
          key={60009}
          url='https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-play-icon-png-image_4187239.jpg'
          sideText='WATCH'
        />
        <Icon
          key={6008}
          url='https://static.vecteezy.com/system/resources/thumbnails/013/122/704/small/layer-outline-icon-free-vector.jpg'
          sideText='NEWS'
        />
      </div>

      <div className='pt-[10rem]'>
        <Icon
          key={60009}
          url='https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Question_Circle-Gray.svg/1024px-Question_Circle-Gray.svg.png'
          sideText='HELP'
        />
        <Icon
          key={6008}
          url='https://img.freepik.com/premium-vector/power-button-icon_622506-69.jpg'
          sideText='LOGOUT'
        />
      </div>
    </div>
  )
}

export default SidebarLeft
