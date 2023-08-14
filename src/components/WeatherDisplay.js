// WeatherDisplay.js
import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
  const city = useSelector(state => state.city);
  const weather = useSelector(state => state.weather);

  if (!city || !weather) {
    return null;
  }

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Conditions: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
