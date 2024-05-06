import React, { useState } from 'react';

function EveryClickBgChange() {
  const [backgroundColor, setBackgroundColor] = useState("White");
  const handleClick = () => {
    const randomColor = '#' + Math.floor(Math.random()*345677);
    setBackgroundColor(randomColor);
  };

  return (
    <div >
      <header className="App-header" style={{ backgroundColor: backgroundColor}}>
      <button onClick={handleClick}>Change Background Color</button>
      </header>
    </div>
  );
}

export default EveryClickBgChange;