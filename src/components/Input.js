import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.css';
import { connect } from 'react-redux';
import { validateInput } from '../actions';
import {bindActionCreators} from 'redux';

class Input extends Component {

  static propTypes = {
    inputValue: PropTypes.string,
    validateInput: PropTypes.func,
  };

  static defaultProps = {
    inputValue : '',
    validateInput: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  onChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  onSubmit = (e) => {
    this.props.validateInput(this.state.inputValue);
    e.preventDefault();
  }

  render = () => {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        <label className='label'>
          Weather
          <input className='input' type="text" placeholder={'Enter a Town, City or [Post Code,Country Code]'} value={this.state.inputValue} onChange={this.onChange} />
        </label>
        <input className='submit' type="submit" value="Submit" />
       </form>
    );
  }
}


const mapStateToProps = state => {
  return {
    inputValue: state.input,
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
)(Input);