import React, { Component} from 'react';

import InputDisplay from './InputDisplay';
import ButtonPanel from './ButtonPanel';
import calculate from '../../logic/class/calculate';
import '../../theme/Calculator.css';

export default class Calculator extends Component {

  constructor(){
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    console.log(this.state);
    console.log(buttonName);
    this.setState(calculate(this.state, buttonName));
    console.log(this.state);
  };

  render(){
    return (
      <div className="component-calculator-app">
        <InputDisplay value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }

}