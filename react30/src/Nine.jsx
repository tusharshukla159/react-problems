import React, { useState } from 'react'

const Nine = () => {
    const [backgroundColor, setBackgroundColor] =useState('yellow');
    const[color, setColor]= useState('white');
    const handleClick=()=>{
      setBackgroundColor(backgroundColor==='yellow'? 'lightblue': 'yellow');
      setColor(backgroundColor==='yellow'? 'yellow': 'lightblue');
    };
  return (
    <div onClick={handleClick} style={{
        backgroundColor,
        cursor:'pointer',
        width:'200px',
        height:'200px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        color,
        
    }}>
      change color
    </div>
  )
}

export default Nine
