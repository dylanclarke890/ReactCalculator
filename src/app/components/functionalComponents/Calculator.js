import React, {useState} from 'react';

import Header from '../shared/Header';
import InputDisplay from './InputDisplay';
import ButtonPanel from './ButtonPanel';

import '../../theme/Calculator.css';
import calculate from '../../logic/function/calculate';

export default function Calculator() {

  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  let handleClick = (buttonName) => {
    setState(calculate(state, buttonName));
  };

  return (
    <div className="component-calculator-app">
      <Header message="Functional Calculator" />
      <InputDisplay value={state.next || state.total || "0"} />
      <ButtonPanel clickHandler={handleClick}/>
    </div>
    );
};