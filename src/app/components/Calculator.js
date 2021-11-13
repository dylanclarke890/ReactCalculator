import React from 'react';
import { Component } from 'react';
import InputDisplay from './InputDisplay';
import './Calculator.css';
import ButtonPanelDisplay from './ButtonPanel';

class Calculator extends Component {

  render(){
    return (
      <div className="component-calculator-app">
        <InputDisplay value="0" />
        <ButtonPanelDisplay />
      </div>
    );
  }

}

export default Calculator;