import React, { useEffect, useState } from 'react'

const Seven = () => {
    const [time, setTime]= useState(10);

    useEffect(()=>{
     if(time>0){
        const timer=setTimeout(()=> setTime(time-1),1000);
     }
    },[time])
  return (
    <div>
      {time}
    </div>
  )
}

export default Seven
