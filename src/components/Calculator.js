/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const displayResult = (calculatorObj) => {
  const { total } = calculatorObj;
  const { next } = calculatorObj;
  const { operation } = calculatorObj;
  let result = null;

  if (total === null && next === null) {
    result = 0;
  } else if (next !== null && total === null) {
    result = next;
  } else if (next !== null && total !== null) {
    if (operation !== null && operation !== undefined) {
      result = `${total} ${operation} ${next}`;
    } else {
      result = total;
    }
  } else if (next === null && total !== null) {
    if (operation !== null && operation !== undefined) {
      result = `${total} ${operation}`;
    } else {
      result = total;
    }
  }
  return result;
};

const updateCalculation = (obj, button, setObj) => {
  const newObj = calculate(obj, button);
  setObj(newObj);
};

export default function Calculator(props) {
  const {
    total, next, operation, setCalculatorObj,
  } = props;
  const calculatorObj = { total, next, operation };

  return (
    <div id="calculator-container" className="calculator-container">
      <div id="result" className="result-display calc-button-style">
        { displayResult(calculatorObj) }
      </div>
      <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, 'AC', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, 'AC', setCalculatorObj); }}>AC</div>
      <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '+/-', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '+/-', setCalculatorObj); }}>+/-</div>
      <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '%', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '%', setCalculatorObj); }}>%</div>
      <div className="operators-buttons calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '÷', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '÷', setCalculatorObj); }}>÷</div>
      <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '7', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '7', setCalculatorObj); }}>7</div>
      <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '8', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '8', setCalculatorObj); }}>8</div>
      <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '9', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '9', setCalculatorObj); }}>9</div>
      <div className="operators-buttons calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, 'x', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, 'x', setCalculatorObj); }}>x</div>
      <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '4', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '4', setCalculatorObj); }}>4</div>
      <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '5', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '5', setCalculatorObj); }}>5</div>
      <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '6', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '6', setCalculatorObj); }}>6</div>
      <div className="operators-buttons calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '-', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '-', setCalculatorObj); }}>-</div>
      <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '1', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '1', setCalculatorObj); }}>1</div>
      <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '2', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '2', setCalculatorObj); }}>2</div>
      <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '3', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '3', setCalculatorObj); }}>3</div>
      <div className="operators-buttons calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '+', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '+', setCalculatorObj); }}>+</div>
      <div className="zero-button calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '0', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '0', setCalculatorObj); }}>0</div>
      <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '.', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '.', setCalculatorObj); }}>.</div>
      <div className="operators-buttons calc-button-style" role="button" tabIndex="0" onClick={() => { updateCalculation(calculatorObj, '=', setCalculatorObj); }} onKeyPress={() => { updateCalculation(calculatorObj, '=', setCalculatorObj); }}>=</div>
    </div>
  );
}

Calculator.propTypes = {
  total: PropTypes.any,
  next: PropTypes.any,
  operation: PropTypes.any,
  setCalculatorObj: PropTypes.func.isRequired,
};

Calculator.defaultProps = {
  total: 0,
  next: null,
  operation: null,
};
