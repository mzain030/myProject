import React, { useEffect, useRef, useState } from 'react'

const UsingHookRef = () => {
    const [inputValue,setInputValue]=useState('');
    const count=useRef(0);
    useEffect(()=>{
        count.current=count.current+1;
    })
  return (
    <div>
        <input
        type='text'
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        ></input>
        <h1>Render Count:{count.current}</h1>
    </div>
  )
}

export default UsingHookRef