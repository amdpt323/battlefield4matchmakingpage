'use client'

import React from 'react'
import ButttonFull from './ButttonFull'
import ButtonButtom from './ButtonButtom'
import Map from './Map'

const ServerInfo = () => {
  const setting = [
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
  ]
  const advanced = [
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
  ]
  const rules = [
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
    {
      info: 'REGION',
      value: 'EUROPE/DE',
    },
  ]

  const maps = [
    {
      textTop: 'CONQUEST LARGE',
      textBottom: 'MAP NAME',
      url: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png',
    },
    {
      textTop: 'CONQUEST LARGE',
      textBottom: 'MAP NAME',
      url: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png',
    },
    {
      textTop: 'CONQUEST LARGE',
      textBottom: 'MAP NAME',
      url: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png',
    },
    {
      textTop: 'CONQUEST LARGE',
      textBottom: 'MAP NAME',
      url: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png',
    },
    {
      textTop: 'CONQUEST LARGE',
      textBottom: 'MAP NAME',
      url: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png',
    },
    {
      textTop: 'CONQUEST LARGE',
      textBottom: 'MAP NAME',
      url: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png',
    },
    {
      textTop: 'CONQUEST LARGE',
      textBottom: 'MAP NAME',
      url: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png',
    },
    {
      textTop: 'CONQUEST LARGE',
      textBottom: 'MAP NAME',
      url: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png',
    },
    {
      textTop: 'CONQUEST LARGE',
      textBottom: 'MAP NAME',
      url: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png',
    },
    {
      textTop: 'CONQUEST LARGE',
      textBottom: 'MAP NAME',
      url: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png',
    },
  ]

  return (
    <div className='server-info px-8 py-4'>
      <div className='pb-16'>
        <p className='text-white text-[10px] mb-0'>
          MULTIPLAYER / SERVER BROWSER /
        </p>
        <p className=' text-white text-[25px] my-0 font-semibold'>
          SERVER INFO
        </p>
      </div>
      <div className='server-info-bottom'>
        <div>
          <p className='text-white text-[20px] font-semibold m-0'>
            ! RC3-BASEMAPS
          </p>
          <p className='text-white text-[10px] '>
            🇺🇸 CONQUEST LARGE - LANCANG DAM - CUSTOM - 60 HZ
          </p>
          <p className='text-white text-[10px] mb-0 font-semibold'>
            Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
            Request, Appeal, Visit us: www.epg.gg | Discord
          </p>
          <p className='text-white text-[10px] m-0 font-semibold'>
            https://discord.gg/3r5NK4d
          </p>
        </div>

        <div className='flex'>
          <ButttonFull name={'JOIN'} />
          <ButttonFull name={'SPECTATE'} />
          <ButttonFull name={'JOIN AS COMMANDER'} />
          <ButttonFull name={'13672'} />
        </div>

        <div className='flex align-middle'>
          <div className='py-5 px-10'>
            <p className='text-white text-[10px] font-semibold m-0'>PLAYERS</p>
            <p className='text-white text-[18px] font-semibold m-0'>60/64</p>
          </div>
          <div className='py-5 px-10'>
            <p className='text-white text-[10px] font-semibold m-0'>PING</p>
            <p className='text-white text-[18px] font-semibold m-0'>104ms</p>
          </div>
          <div className='py-5 px-10'>
            <p className='text-white text-[10px] font-semibold m-0'>TICKRATE</p>
            <p className='text-white text-[18px] font-semibold m-0'>60 Hz</p>
          </div>
        </div>

        <div className='flex align-middle'>
          <p className='text-white text-[10px] font-semibold m-0 pr-[7rem]'>
            SETTINGS
          </p>
          <p className='text-white text-[10px] font-semibold m-0 px-[7rem]'>
            ADVANCED
          </p>
          <p className='text-white text-[10px] font-semibold m-0 px-[7rem]'>
            RULES
          </p>
        </div>

        <div className='stat  w-[80%] my-2'>
          <div className='statl'>
            {setting.map((item, index) => {
              return (
                <ButtonButtom key={index} info={item.info} value={item.value} />
              )
            })}
          </div>
          <div className='statm'>
            {advanced.map((item, index) => {
              return (
                <ButtonButtom key={index} info={item.info} value={item.value} />
              )
            })}
          </div>
          <div className='statr'>
            {rules.map((item, index) => {
              return (
                <ButtonButtom key={index} info={item.info} value={item.value} />
              )
            })}
          </div>
        </div>
        <p className='font-semibold text-white text-[10px]'>MAP ROTATION</p>
        <div className='map-box w-[95%]'>
          {maps.map((item, index) => {
            return <Map key={index} {...item} />
          })}
        </div>
      </div>
     
    </div>
  )
}

export default ServerInfo
