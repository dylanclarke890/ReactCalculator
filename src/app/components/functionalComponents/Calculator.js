import React, {useState} from 'react';

import InputDisplay from './InputDisplay';
import ButtonPanel from './ButtonPanel';
import calculate from '../../logic/function/calculate';
import '../../theme/Calculator.css';

export default function Calculator() {

  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  let handleClick = (buttonName) => {
    console.log(state);
    console.log(buttonName);
    setState(calculate(state, buttonName));
    console.log(state);
  };

  return (
    <div className="component-calculator-app">
      <InputDisplay value={state.next || state.total || "0"} />
      <ButtonPanel clickHandler={handleClick}/>
    </div>
    );
};