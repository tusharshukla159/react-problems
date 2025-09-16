import React from 'react'

const Four = () => {

    const items=['item1', 'item2', 'item3']
  return (
    <div>
      {items.map((item,index)=>{
        return <li key={index}>{item}</li>
      })}
    </div>
  )
}

export default Four
