import React, { useState } from 'react'

const Fifteen = () => {
    const[searchItem, setSearchItem ]=useState('');
    const items=['item 1', 'item 2', 'item 3', 'Another Item', 'Another Item 2'];
    const filteredItems= items.filter((item)=> item.toLowerCase().includes(searchItem.toLowerCase()))
  return (
    <div>
      <input type='text' placeholder='search....' onChange={(e)=> setSearchItem(e.target.value)}></input>
      <ul>
      {filteredItems.map((item, index)=>(
        <li key={index}>{item}</li>
      ))}
      </ul>
    </div>
  )
}

export default Fifteen

