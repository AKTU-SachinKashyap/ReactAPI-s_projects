
import React, { useState } from 'react';

const Celsius = ({ unit }) => {
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const convertTemperature = () => {
    const inputValueNumber = parseFloat(inputValue);

    if (isNaN(inputValueNumber)) {
      setConvertedValue('Invalid Input');
      return;
    }

    if (unit === 'celsius') {
      const convertedTemperature = (inputValueNumber * 9 / 5) + 32;
      setConvertedValue(`${convertedTemperature.toFixed(2)} °F`);
    } else if (unit === 'fahrenheit') {
      const convertedTemperature = (inputValueNumber - 32) * 5 / 9;
      setConvertedValue(`${convertedTemperature.toFixed(2)} °C`);
    }
  }; 

  return (
    <div>
      <h2>Temperature Converter</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={convertTemperature}>Convert</button>
      <div>
        {convertedValue && <p>Converted Temperature: {convertedValue}</p>}
      </div>
    </div>
  );
};

export default Celsius;





