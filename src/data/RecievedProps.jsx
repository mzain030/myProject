import React from 'react'

const RecievedProps = (props) => {
    const {count,backgroundColor,border}=props;
  return (
    <div >
        <h1 style={{border:border}}>{count}</h1>
    </div>
  )
}

export default RecievedProps;