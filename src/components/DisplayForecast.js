import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DisplayForecast.css';
import DisplayHourlyForecast from './DisplayHourlyForecast.js';
import ForecastSummary from './ForecastSummary';

class DisplayForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
          days : {
              day1 : {
                day: '',
                list: [],
              },
              day2 : {
                day: '',
                list: [],
              },
              day3 : {
                day: '',
                list: [],
              },
              day4 : {
                day: '',
                list: [],
              },
              day5 : {
                day: '',
                list: []
              },
              day6 : {
                day: '',
                list: []
              },
          },
          hourlyForecast : {
            day: '',
            list:[],
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
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let list = this.props.weatherData.list;
      let date = null, day = null;
      let day1=this.state.days.day1;
      let day2=this.state.days.day2;
      let day3=this.state.days.day3;
      let day4=this.state.days.day4;
      let day5=this.state.days.day5;
      let day6=this.state.days.day6;
      let daylist = [], daylist2 = [], daylist3 = [], daylist4 = [], daylist5 = [], daylist6=[];

      let fiveDays = [];
      var calDay = new Date();
      if(new Date(Date.now()).getHours() < 21) {
        let fiveDates = [new Date(calDay.setDate(calDay.getDate())), new Date(calDay.setDate(calDay.getDate()+1)), new Date(calDay.setDate(calDay.getDate()+1)), new Date(calDay.setDate(calDay.getDate()+1)), new Date(calDay.setDate(calDay.getDate()+1)), new Date(calDay.setDate(calDay.getDate()+1))]
        fiveDays = [fiveDates[0].getDate(), fiveDates[1].getDate(), fiveDates[2].getDate(),fiveDates[3].getDate(), fiveDates[4].getDate(), fiveDates[5].getDate()]
      } else {
        let fiveDates = [new Date(calDay.setDate(calDay.getDate()+1)), new Date(calDay.setDate(calDay.getDate()+1)), new Date(calDay.setDate(calDay.getDate()+1)), new Date(calDay.setDate(calDay.getDate()+1)), new Date(calDay.setDate(calDay.getDate()+1))];
        fiveDays =[fiveDates[0].getDate(), fiveDates[1].getDate(), fiveDates[2].getDate(),fiveDates[3].getDate(), fiveDates[4].getDate(), -1];
      }
 
      //console.log(this.props.weatherData);
      for(let i=0; i<this.props.weatherData.cnt; i++){
        day='';
        date = new Date(list[i].dt_txt);
        if(date.getDate()===fiveDays[0]) {
          day = days[date.getDay()];
          daylist.push(list[i]);
          day1 = {day: day, list: daylist }; 
        }
        else if(date.getDate()===fiveDays[1]) {
          day = days[date.getDay()];
          daylist2.push(list[i]);
          day2 = {day: day, list: daylist2 }; 
        }
        else if(date.getDate()===fiveDays[2]) {
          day = days[date.getDay()];
          daylist3.push(list[i]);
          day3 = {day: day, list: daylist3 }; 
        }
        else if(date.getDate()===fiveDays[3]) {
          day = days[date.getDay()];
          daylist4.push(list[i]);
          day4 = {day: day, list: daylist4 }; 
        } else if(date.getDate()===fiveDays[4]){
          day = days[date.getDay()];
          daylist5.push(list[i]);
          day5 = {day: day, list: daylist5 };         
        } else if(date.getDate()===fiveDays[5]){
          day = days[date.getDay()];
          daylist6.push(list[i]);
          day6 = {day: day, list: daylist6 };            
        }
      }
      this.setState({days: {day1: day1, day2: day2, day3: day3, day4: day4, day5: day5, day6: day6}, hourlyForecast: day1});  
    }

    componentDidMount = () => {
        this.processData();
    }

    onClickDay1 = () => this.setState({hourlyForecast: this.state.days.day1});
    onClickDay2 = () => this.setState({hourlyForecast: this.state.days.day2});
    onClickDay3 = () => this.setState({hourlyForecast: this.state.days.day3});
    onClickDay4 = () => this.setState({hourlyForecast: this.state.days.day4});
    onClickDay5 = () => this.setState({hourlyForecast: this.state.days.day5});
    onClickDay6 = () => this.setState({hourlyForecast: this.state.days.day6});

    render = () => {      
      let date= (this.state.hourlyForecast.list.length > 0) ? new Date(this.state.hourlyForecast.list[0].dt_txt): new Date(this.props.weatherData.list[0].dt_txt);
      let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let dayMonth = date.getDate().toString() + ' ' + months[date.getMonth()];

      return(
        <div className="container">
          <div className="section1">
            <div className="header">
              <text>
                <strong>
                  {this.props.weatherData.city.name + '   '}{ this.state.hourlyForecast.day + ', '}{dayMonth}
                </strong>
              </text>
            </div>
              {this.state.hourlyForecast.list.length > 0 ?
                <ForecastSummary data={this.state.hourlyForecast} /> : null}
          </div>
          <div className="section2">
            <div className="selectDay">
              <button 
                type={'button'} 
                className="select"
                onClick={this.onClickDay1}><text><strong>{this.state.days.day1.day}</strong></text>
              </button> 
              <button 
                type={'button'} 
                className="select"
                onClick={this.onClickDay2}><text><strong>{this.state.days.day2.day}</strong></text>
              </button> 
              <button 
                type={'button'} 
                className="select"
                onClick={this.onClickDay3}><text><strong>{this.state.days.day3.day}</strong></text>
              </button> 
              <button 
                type={'button'} 
                className="select"
                onClick={this.onClickDay4}><text><strong>{this.state.days.day4.day}</strong></text>
              </button> 
              <button 
                type={'button'} 
                className="select"
                onClick={this.onClickDay5}><text><strong>{this.state.days.day5.day}</strong></text>
              </button> 
              {
                this.state.days.day6.list.length > 0 ? (
                  <button 
                    type={'button'} 
                    className="select"
                    onClick={this.onClickDay6}><text><strong>{this.state.days.day6.day}</strong></text>
                  </button> 
                ) : null
              }
            </div>
            {this.state.hourlyForecast.list.length > 0?
              <DisplayHourlyForecast data={this.state.hourlyForecast}/>
            :null}
          </div>
        </div>
      );
    }
}

export default DisplayForecast;