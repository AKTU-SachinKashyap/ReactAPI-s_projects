import React from 'react'
import Celsius from './Celsius'



const   Main=() => {
  return (
    <div>
      <Celsius unit="celsius" />
      {/* or <TemperatureConverter unit="fahrenheit" /> */}
    </div>
  );
};

export default Main;



