// Api key from Open Weather MAp - 61a449e46802d368ddbcbeb79e52104c

import fetch from 'cross-fetch';

const trimInput = (input) => {
  return input.replace(/  +/g, '');
}

export const callWeatherApi = (input) => {
  let trimmedStr = input;
  if(input.search(',')) {
    trimmedStr = trimInput(input);
  }
 
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${trimmedStr}&APPID=61a449e46802d368ddbcbeb79e52104c`;
  alert(url);
  return queryCityName(url)
  .then(response => {
    if(response.status === 200) {
      return response.json();
    } else if(response.status === 404) {
      url = `http://api.openweathermap.org/data/2.5/forecast?zip=${trimmedStr}&APPID=61a449e46802d368ddbcbeb79e52104c`;
      alert(url);
      return queryZipCode(url)
      .then(response => response)
      .catch(error => Promise.reject(error))
    }
  })
  .catch(error => {
    return Promise.reject(error);
  })
};

const queryCityName = (url) => {
  return fetch(url)
  .then(response => {
    if (response.status === 200 || response.status === 404) {
      return response;
    } else {
      throw Error('Something went wrong on api server!');
    }
  })
  .catch(error => {
    return Promise.reject(error.message);
  })
}

const queryZipCode = (url) => {
  return fetch(url)
  .then(response => {
    //console.log(response);
    if (response.status === 200) {
      return response.json();
    } else if(response.status === 404) {
      throw Error('Invalid Input!');
    }
    else {
      throw Error('Something went wrong on api server!');
    }
  })
  .catch(error => {
    return Promise.reject(error.message);
  })
}