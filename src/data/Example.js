import React, { useEffect, useState } from 'react'

const Example = () => {
    const [count,setCount]=useState(0);
    const [calculation,setCalculation]=useState(0);
    useEffect(()=>{
        setCalculation(()=>count*2)
    },[count])
  return (
    <div>
        <h1>Calculation:{calculation}</h1>
<button type='button' onClick={()=>setCount((c)=>c+1)}>Click Me</button>
<h1>Count:{count}</h1>
    </div>
  )
}

export default Example;