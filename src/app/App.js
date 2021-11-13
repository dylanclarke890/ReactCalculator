import React from 'react';
import CalculatorClass from './components/classComponents/Calculator';
import CalculatorFunc from './components/functionalComponents/Calculator';

export default function App() {
  return (
    <div className="App">
      <CalculatorClass />
      <CalculatorFunc />
    </div>
  );
}