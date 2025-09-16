import React, { useState } from 'react'

const Twelve = () => {
    const [file,setFile]= useState(null);
    const handleFileChange=(e)=>{
        setFile(e.target.files[0]);
    }
  return (
    <>
      <input type='file' accept='image/*' onChange={handleFileChange}></input>
      {file && <img src={URL.createObjectURL(file)} alt='uploaded' style={{objectFit: 'cover' , width: '200px', height: '300px'}} ></img>}
    </>
  )
}

export default Twelve
