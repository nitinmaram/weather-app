// App.js
import React from 'react';
import { Provider } from 'react-redux';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Weather App</h1>
        <SearchBar />
        <WeatherDisplay />
      </div>
    </Provider>
  );
};

export default App;
