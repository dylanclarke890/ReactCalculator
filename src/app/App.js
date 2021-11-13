import React from 'react';
import CalculatorClass from './classComponents/Calculator';
import CalculatorFunc from './functionalComponents/Calculator';

export default function App() {
  return (
    <div className="App">
      <CalculatorClass />
      <CalculatorFunc />
    </div>
  );
}