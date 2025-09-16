import React, { useState } from 'react'

const Five = () => {
    const [isToggled, setIsToggled]= useState(false);
    const handleToggle=(e)=>{
        setIsToggled(!isToggled);
    }
  return (
    <div>
        
      <input type='checkbox' onChange={handleToggle}></input>
      
      <p>{isToggled? "On": "Off" }</p>
    </div>
  )
}

export default Five
