import React from 'react';
import { Component } from 'react';

import InputDisplay from './InputDisplay';
import './Calculator.css';
import ButtonPanelDisplay from './ButtonPanel';

export default class Calculator extends Component {

  constructor(){
    super();
    this.state = {
      value: "0"
    };
  }

  handleClick = buttonName => {
    console.log(buttonName);
  }

  render(){
    return (
      <div className="component-calculator-app">
        <InputDisplay value={this.state.value} />
        <ButtonPanelDisplay clickHandler={this.handleClick}/>
      </div>
    );
  }

}