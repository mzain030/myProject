import React, { useState } from 'react'
import RecievedProps from './RecievedProps';

const SendProps = () => {
    const [count,setCount]=useState("");
    const [backgroundColor,setBackgroundColor]=useState
    
    const [border,setBorder]=useState("")
  return (
    <div>
        <input type='text' onChange={(e)=>setCount(e.target.value)}  style={{border:"5px solid yellow"}}></input>
        <h1>{count}</h1>
        <RecievedProps count={count}
        //  backgroundColor={backgroundColor}
          border={border}/>
    </div>
  )
}

export default SendProps;