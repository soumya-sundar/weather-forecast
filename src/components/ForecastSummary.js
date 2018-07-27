import React, { Component } from 'react';

class ForecastSummary extends Component {

    render = () => {
      console.log(this.props.data);
      const list = this.props.data.list;
      return (
        <div>
          <div style={{float:'right'}}>
              <img alt={'no icon'} 
              src={`http://openweathermap.org/img/w/${list[0].weather[0].icon}.png`}
              width={'80px'}
              height={'80px'}
              />
          </div>
          <div><label><underline>Details</underline></label></div>
          <div><label>Temp: </label><text>{list[0].main.temp}</text></div>
          <div><label>Speed: </label><text>{list[0].wind.speed}</text></div>
          <div><label>Pressure: </label><text>{list[0].main.pressure}</text></div>
          <div><label>Humidity: </label><text>{list[0].main.humidity}</text></div>
          <div><label>Sea Level: </label><text>{list[0].main.sea_level}</text></div>
          <div><label>Weather: </label><text>{list[0].weather[0].description}</text></div>       
        </div>
      );
    }
}

export default ForecastSummary;