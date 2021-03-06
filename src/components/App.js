import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Input from './Input.js';
import { connect } from 'react-redux';
import { validateInput } from '../actions';
import {bindActionCreators} from 'redux';
import DisplayForecast from './DisplayForecast';

class App extends Component {
  static propTypes = {
    inputValue: PropTypes.string,
    weatherData: PropTypes.object,
  };

  static defaultProps = {
    inputValue : '',
    weatherData: {},
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather Forecast</h1>
        </header>
        <article>
          <section>
            <Input/>
          </section>
          <section>
          {Object.keys(this.props.weatherData).length !== 0 ?
          <DisplayForecast weatherData={this.props.weatherData} />
          : <div style={{paddingLeft: '20px'}}><h2>{this.props.inputValue}</h2></div>}
          </section>
        </article>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.input,
    weatherData: state.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    validateInput : bindActionCreators(validateInput, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
