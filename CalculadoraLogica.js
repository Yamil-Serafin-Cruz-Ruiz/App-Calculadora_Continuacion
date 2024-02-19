import React, { useState } from 'react';
import Calculator from './Calculator';

const CalculatorLogic = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (button) => {
    if (button === '=') {
      calculateResult();
    } else if (button === 'C') {
      clearInput();
    } else {
      setInput(input + button);
    }
  };

  const calculateResult = () => {
    setResult(eval(input).toString());
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <Calculator
      input={input}
      result={result}
      handleButtonPress={handleButtonPress}
    />
  );
}

export default CalculatorLogic;
