import React, { useState } from 'react'

const BgColorChange = () => {
    const [bgColor, setBgColor] = useState("green");
    // const [bgColor, setBgColor] = useState('white');

    // function toggleBackground() {
    //   if (bgColor === 'white') setBgColor('black');
    //   if (bgColor === 'black') setBgColor('white');
    // }
    return (
      <div className="App">
        <header className="App-header" style={{background: bgColor}}>
          <button onClick={()=>setBgColor("red")}>Change Color</button>
        </header>
      </div>
    );
  
}
   

export default BgColorChange;