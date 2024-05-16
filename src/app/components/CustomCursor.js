"use client"
const { useState, useEffect } = require("react");


const CustomCursor =()=>{
  const [position,setPosition] = useState({x:10000,y:10000})

  useEffect(()=>{
    const handleMouseMove = (e)=>{
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove',handleMouseMove)
    return ()=>{
      document.removeEventListener('mousemove',handleMouseMove)
    }
  },[])

 return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
}

export default CustomCursor