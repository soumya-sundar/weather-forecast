import React, { Component } from 'react';
import './ForecastSummary.css';

class ForecastSummary extends Component {
    render = () => {
      //console.log(this.props.data);
      const list = this.props.data.list;
      return (
        <div className="summary">
          <div className="column1">
            <ul className="ul"><label><u>Details</u></label>
              <li className="li"><text><strong>Temp: </strong>{list[0].main.temp}&deg;C</text></li>
              <li className="li"><text><strong>Wind: </strong>{list[0].wind.speed}m/s</text></li>
              <li className="li"><text><strong>Pressure: </strong>{list[0].main.pressure}hPa</text></li>
              <li className="li"><text><strong>Humidity: </strong>{list[0].main.humidity}%</text></li>
              <li className="li"><text><strong>Sea Level: </strong>{list[0].main.sea_level}%</text></li>
              <li className="li"><text><strong>Weather: </strong>{list[0].weather[0].description}</text></li> 
            </ul> 
          </div> 
          <div className="column2">
            <img alt={'no icon'} 
              src={`http://openweathermap.org/img/w/${list[0].weather[0].icon}.png`}
              height={'80px'}
              width={'80px'}
            />
          </div>    
        </div>
      );
    }
}

export default ForecastSummary;