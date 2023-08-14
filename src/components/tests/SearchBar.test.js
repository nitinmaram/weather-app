import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchBar from '../SearchBar';
import { setCity, setWeather } from '../../redux/actions';

const mockStore = configureStore([]);

test('SearchBar triggers search', async () => {
  const store = mockStore({ city: '', weather: null });
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  const input = screen.getByPlaceholderText('Enter city name');
  fireEvent.change(input, { target: { value: 'London' } });

  const button = screen.getByText('Search');
  fireEvent.click(button);

  // Assertions for Redux actions and component behavior
  const expectedActions = [
    setCity('London'),
    // Assuming you are mocking weather data for testing
    setWeather({ main: { temp: 20 }, weather: [{ description: 'Cloudy' }] }),
  ];
  expect(store.getActions()).toEqual(expectedActions);

  // Assert that the WeatherDisplay component renders with the weather information
  const weatherDisplay = screen.getByText('Weather in London');
  expect(weatherDisplay).toBeInTheDocument();
});
