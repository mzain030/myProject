import React, { useState } from 'react';

const countryData = {
  'PAKISTAN': ['Lahore', 'Karachi', 'Okara'],
  'INDIA': ['Mumbai', 'New Delhi', 'Channi'],
  'UK': ['London', 'Multan', 'New York'],

};

const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setCities(countryData[country] || []);
  };

  return (
    <div>
      <h2>Country and City Select</h2>
      <label ok="countries">Select a country:</label>
      <select id="countries" onChange={handleCountryChange} value={selectedCountry}>
        <option value="">Select a country</option>
        {Object.keys(countryData).map(country => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>

      {selectedCountry && (
        <div>
          <h3>Cities in {selectedCountry}:</h3>
            {cities.map(city => (
              <li>{city}</li>
            ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
