/* eslint-disable react/forbid-prop-types */
import { React, useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';
import ResultScreen from './ResultScreen';
import styles from './Calculator.module.css';

export default function Calculator() {
  const [calculatorObj, setCalculatorObj] = useState({ total: 0, next: null, operation: null });

  const updateCalculation = (calculatorObj, value) => {
    setCalculatorObj(calculate(calculatorObj, value));
  };

  return (
    <div id="calculator-container" className={styles.calculatorContainer}>
      <ResultScreen calculatorObj={calculatorObj} styles={styles} />
      <Buttons calculate={updateCalculation} styles={styles} calculatorObj={calculatorObj} />
    </div>
  );
}
