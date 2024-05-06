import React, { useEffect, useState } from 'react'

const Time = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1)
        },1000)
    })
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount((count)=>count+1)
    //     })
    // } )
    // useEffect(()=>{
    //    setTimeout(()=>{
    //      setCount((count)=>count+1)
    //    },1000)
    // })
  return (
    <div>
<button type='button'>Click me</button>
<h1> the number is {count}</h1>
    </div>
  )
}

export default Time