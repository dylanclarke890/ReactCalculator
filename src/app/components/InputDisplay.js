import React from 'react';
import { Component } from 'react';
import './InputDisplay.css';

class InputDisplay extends Component {
  render(){
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    )
  }
}

export default InputDisplay;