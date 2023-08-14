// reducers.js
const initialState = {
    city: '',
    weather: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CITY':
        return { ...state, city: action.payload };
      case 'SET_WEATHER':
        return { ...state, weather: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  