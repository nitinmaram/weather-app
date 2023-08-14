// weatherService.js
import axios from 'axios';

const API_KEY = '295aa3bad3b740e43df2bff5aee16613';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async city => {
  try {
    const response = await axios.get(`${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
};
