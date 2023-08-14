// SearchBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCity, setWeather } from '../redux/actions';
import { fetchWeather } from '../services/weatherService';

const SearchBar = () => {
  const [cityInput, setCityInput] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (cityInput.trim() !== '') {
      dispatch(setCity(cityInput));
      const weatherData = await fetchWeather(cityInput);
      dispatch(setWeather(weatherData));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={cityInput}
        onChange={event => setCityInput(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
