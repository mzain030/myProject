import React, { useEffect, useState,axios } from 'react'
import { GET_USER } from './Api';
const CallApi = () => {
    const [data,setData]=useState([]);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(true);

    function getData(){
        axios.get(GET_USER).then((respones)=>{
        setData(respones?.data)
        }).catch((error)=>{
            setError(true)
        }).finally(()=>{
            setLoading(false)
        })
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>

    </div>
  )
}

export default CallApi;