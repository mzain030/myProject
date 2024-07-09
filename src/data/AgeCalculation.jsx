import React, { useState } from 'react';
import "./styles.css";
function AgeCalculation() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const dob = new Date(birthdate);
    const now = new Date();
    let ageDiff = now.getFullYear() - dob.getFullYear();

    // Adjust age if birthday hasn't occurred yet this year
    if (now.getMonth() < dob.getMonth() || 
        (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
      ageDiff--;
    }

    setAge(ageDiff);
  };

  return (
    <div className='ss'>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <h1>Your age is: {age}</h1>}
    </div>
  );
}

export default AgeCalculation;
