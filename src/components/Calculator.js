import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.calculate = this.calculate.bind(this);
    this.displayResult = this.displayResult.bind(this);
    this.state = {
      calculatorObj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  calculate(obj, button) {
    let newObj;
    try {
      newObj = calculate(obj, button);
    } catch {
      newObj = {
        total: "Can't perform module operation by 0",
      };
    }
    this.setState(
      {
        calculatorObj: newObj,
      },
    );
  }

  displayResult() {
    const { calculatorObj } = this.state;
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
  }

  render() {
    const { calculatorObj } = this.state;

    return (
      <div id="calculator-container" className="calculator-container">
        <div id="result" className="result-display calc-button-style">
          { this.displayResult() }
        </div>
        <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, 'AC'); }} onKeyPress={() => { this.calculate(calculatorObj, 'AC'); }}>AC</div>
        <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '+/-'); }} onKeyPress={() => { this.calculate(calculatorObj, '+/-'); }}>+/-</div>
        <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '%'); }} onKeyPress={() => { this.calculate(calculatorObj, '%'); }}>%</div>
        <div className="operators-buttons calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '÷'); }} onKeyPress={() => { this.calculate(calculatorObj, '÷'); }}>÷</div>
        <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '7'); }} onKeyPress={() => { this.calculate(calculatorObj, '7'); }}>7</div>
        <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '8'); }} onKeyPress={() => { this.calculate(calculatorObj, '8'); }}>8</div>
        <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '9'); }} onKeyPress={() => { this.calculate(calculatorObj, '9'); }}>9</div>
        <div className="operators-buttons calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, 'x'); }} onKeyPress={() => { this.calculate(calculatorObj, 'x'); }}>x</div>
        <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '4'); }} onKeyPress={() => { this.calculate(calculatorObj, '4'); }}>4</div>
        <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '5'); }} onKeyPress={() => { this.calculate(calculatorObj, '5'); }}>5</div>
        <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '6'); }} onKeyPress={() => { this.calculate(calculatorObj, '6'); }}>6</div>
        <div className="operators-buttons calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '-'); }} onKeyPress={() => { this.calculate(calculatorObj, '-'); }}>-</div>
        <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '1'); }} onKeyPress={() => { this.calculate(calculatorObj, '1'); }}>1</div>
        <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '2'); }} onKeyPress={() => { this.calculate(calculatorObj, '2'); }}>2</div>
        <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '3'); }} onKeyPress={() => { this.calculate(calculatorObj, '3'); }}>3</div>
        <div className="operators-buttons calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '+'); }} onKeyPress={() => { this.calculate(calculatorObj, '+'); }}>+</div>
        <div className="zero-button calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '0'); }} onKeyPress={() => { this.calculate(calculatorObj, '0'); }}>0</div>
        <div className="calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '.'); }} onKeyPress={() => { this.calculate(calculatorObj, '.'); }}>.</div>
        <div className="operators-buttons calc-button-style" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '='); }} onKeyPress={() => { this.calculate(calculatorObj, '='); }}>=</div>
      </div>
    );
  }
}
