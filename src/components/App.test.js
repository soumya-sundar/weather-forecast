import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { callWeatherApi } from './../api/callWeatherApi.js';
import expect from 'jest';

it('Test Api return for inputs with city name and country code', () => {
  let input="London,UK"
  let p = new Promise((resolve, reject)=> {
   return callWeatherApi(input)
    .then(response => {
      //console.log(response.city.country);
      expect(response.city.country).toBe('GB');
    })
    .catch(error => {
      //console.log(error);
    })
  });
});

it('Test Api return for inputs with city name only', () => {
  let input="London"
  let p = new Promise((resolve, reject)=> {
   return callWeatherApi(input)
    .then(response => {
      //console.log(response.city.country);
      expect(response.city.country).toBe('US');
    })
    .catch(error => {
      //console.log(error);
    })
  });
});

it('Test Api return for inputs with town name only', () => {
  let input="Rye"
  let p = new Promise((resolve, reject)=> {
   return callWeatherApi(input)
    .then(response => {
      //console.log(response.city.country);
      expect(response.city.country).toBe('GB');
    })
    .catch(error => {
      //console.log(error);
    })
  });
});

it('Test Api return for inputs with US town name only', () => {
  let input="Charlotte"
  let p = new Promise((resolve, reject)=> {
   return callWeatherApi(input)
    .then(response => {
      //console.log(response.city.country);
      expect(response.city.country).toBe('US');
    })
    .catch(error => {
      //console.log(error);
    })
  });
});


it('Test Api return for inputs with postal code', () => {
  let input="60601"
  let p = new Promise((resolve, reject)=> {
   return callWeatherApi(input)
    .then(response => {
      //console.log(response.city.country);
      expect(response.city.country).toBe('US');
    })
    .catch(error => {
      //console.log(error);
    })
  });
});

it('Test Api return for inputs with postal code and country code', () => {
  let input="600096,in"
  let p = new Promise((resolve, reject)=> {
   return callWeatherApi(input)
    .then(response => {
      //console.log(response.city.country);
      expect(response.city.country).toBe('IN');
    })
    .catch(error => {
      //console.log(error);
    })
  });
});

/*
it('Test Api return for inputs with UK postal code and country code', () => {
  let input="RG14 5DE, UK"
  let p = new Promise((resolve, reject)=> {
   return callWeatherApi(input)
    .then(response => {
      //console.log(response.city.country);
    })
    .catch(error => {
      //console.log(error);
      expect(error).toBe('Invalid Input!')
    })
  });
}); */