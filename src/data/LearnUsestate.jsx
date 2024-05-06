import React, { useState } from 'react';

const LearnUsestate = () => {
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount((count)=>count+1)
    };
    const decrement=()=>{
        setCount((count)=>count-1)
    }
  return (
    <div>
<button type='button' onClick={increment}>+</button>
<h1>{count}</h1>
<button type='button' onClick={decrement}>-</button>
    </div>
  )
}

export default LearnUsestate