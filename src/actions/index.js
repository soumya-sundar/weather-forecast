import { callWeatherApi } from '../api/callWeatherApi';
//import fetch from 'cross-fetch';

const storeInput = input => {
  return {
    type: 'STORE_INPUT',
    input
  }
}

const storeWeatherData = data => {
  return {
    type: 'STORE_WEATHER_DATA',
    data
  }
}

const invalidState = (error) => {
  return { 
    type: 'INVALID_STATE',
    error
  }
}

export const validateInput = (input) => {
  return dispatch => {
    return callWeatherApi(input)
    .then(response => {
       //console.log(response);
        dispatch(storeInput(input));
        dispatch(storeWeatherData(response));
    })
    .catch(error => {
      //console.log(error);
      dispatch(invalidState(error));
    })
  }
}