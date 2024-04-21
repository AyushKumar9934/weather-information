import React from 'react';
import weathercloud from '../assets/cloud.png';

const WeatherCard = ({weatherDetails}) => {
  console.log({weatherDetails});
  
  return (
    <div className='weather-section'>
      <div className="weather-card">
        <div className="weather-temp-c">
          {weatherDetails.current.temp_c}<sup>o</sup>
        </div>
        <div className="weather-info">
          <span>
            {weatherDetails.current.humidity}
          </span>
          <span>
            {weatherDetails.current.cloud}
          </span>
          <span>
            {weatherDetails.location.name},{weatherDetails.location.region},{weatherDetails.location.country};
          </span>
        </div>
        <div className="weather-avtar">
          <img width="100px" height="100px" src={weathercloud} alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
