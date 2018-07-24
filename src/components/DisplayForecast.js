import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DisplayForecast.css';

class DisplayForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
          days : {
              day1 : {
                date: '',
                day: '',
                list: []
              },
              day2 : {
                date: '',
                day: '',
                list: []
              },
              day3 : {
                date: '',
                day: '',
                list: []
              },
              day4 : {
                date: '',
                day: '',
                list: []
              },
              day5 : {
                date: '',
                day: '',
                list: []
              },
          },
        }
    }

    static propTypes = {
        weatherData:PropTypes.object
    }

    static defaultProps = {
        weatherData : {},
    }

    processData = () => {
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let list = this.props.weatherData.list;
      let date = null;
      let day = null;
      let daylist = [];
      for(let i=0; i < 8; i++){
        date = new Date(list[i].dt_txt);
        day = days[date.getDay()];
        daylist.push(list[i]);
      }
      let day1 = {date: date, day: day, list: daylist }; 

      daylist = [];
      for(let i=8; i <= 15; i++){
        date = new Date(list[i].dt_txt);
        day = days[date.getDay()];
        daylist.push(list[i]);
      } 
      let day2 = {date: date, day: day, list: daylist }; 
        
      daylist = [];
      for(let i=16; i <= 23; i++){
        date = new Date(list[i].dt_txt);
        day = days[date.getDay()];
        daylist.push(list[i]);
      }
      let day3 = {date: date, day: day, list: daylist }; 
        
      daylist = [];
      for(let i=24; i <= 31; i++){
        date = new Date(list[i].dt_txt);
        day = days[date.getDay()];
        daylist.push(list[i]);          
      } 
      let day4 = {date: date, day: day, list: daylist }; 

      daylist = [];
      for(let i=32; i <= 39; i++){
        date = new Date(list[i].dt_txt);
        day = days[date.getDay()];
        daylist.push(list[i]);
      }
      let day5 = {date: date, day: day, list: daylist }; 
      this.setState({days: {day1: day1, day2: day2, day3: day3, day4: day4, day5: day5}});  
    }

    componentDidMount = () => {
        this.processData();
    }

    render = () => {        
        let button = {
            width: '20%',
            height: '50px',
            backgroundColor: 'rgb(24, 24, 71)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
        }

        return(
          <div className="container">
            <div className="section1">
              <div className="header">
                {this.props.weatherData.city.name}
              </div>
              <div className="summary">


              </div>
            </div>
            <div className="section2">
              <div className="selectDay">
                <button 
                  type={'button'} 
                  style={button}
                  onClick={() => {console.log(this.state.days.day1)}}> <strong>Day1</strong>
                </button> 
                <button 
                  type={'button'} 
                  style={button}
                  onClick={() => {console.log(this.state.days.day2)}}> <strong>Day2</strong>
                </button> 
                <button 
                  type={'button'} 
                  style={button}
                  onClick={() => {console.log(this.state.days.day3)}}> <strong>Day3</strong>
                </button> 
                <button 
                  type={'button'} 
                  style={button}
                  onClick={() => {console.log(this.state.days.day4)}}> <strong>Day4</strong>
                </button> 
                <button 
                  type={'button'} 
                  style={button}
                  onClick={() => {console.log(this.state.days.day5)}}> <strong>Day5</strong>
                </button> 
              </div>
            </div>
          </div>
        );
    }
}

export default DisplayForecast;