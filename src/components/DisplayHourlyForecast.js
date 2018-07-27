import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./DisplayHourlyForecast.css";

class DisplayHourlyForecast extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    static propTypes={
      data: PropTypes.object.isRequired,
    }

    precisionRound(number, precision) {
        let factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    }

    getTime = (list) => {
      let timeList = [];
      for(let i=0; i<list.length; i++) {
        let newDate=new Date(list[i]['dt_txt']);
        let time=(newDate.getHours()).toString() + ':00';
        timeList.push(time);
      }
      return timeList;
    }

    render = () => {
      let data = this.props.data;
      let timeList = this.getTime(data.list);

      let jsxArrays=data.list.map((value, index)=>{
        let classNam=(index===data.list.length - 1) ? "hourLast": "hour"
        return(
          <div className={classNam} key={index}>
            <div className="row"><text>{timeList[index]}</text></div>
            <div className="row"><text>{value.main.temp_max}</text></div>
            <img alt={'no icon'} src={`http://openweathermap.org/img/w/${value.weather[0].icon}.png`}/>
            <div className="row"><text>{value.main.temp_min}</text></div>
          </div>
        );  
      });

      return(
        <div className="hourlyForecast">
           {jsxArrays}
        </div>
      );
    }
}

export default DisplayHourlyForecast;