import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div id="calculator-container" className="calculator-container">
        <div id="result" className="result-display calc-button-style">
          { result }
        </div>
        <div className="calc-button-style">AC</div>
        <div className="calc-button-style">+/-</div>
        <div className="calc-button-style">%</div>
        <div className="operators-buttons calc-button-style">÷</div>
        <div className="calc-button-style">7</div>
        <div className="calc-button-style">8</div>
        <div className="calc-button-style">9</div>
        <div className="operators-buttons calc-button-style">x</div>
        <div className="calc-button-style">4</div>
        <div className="calc-button-style">5</div>
        <div className="calc-button-style">6</div>
        <div className="operators-buttons calc-button-style">-</div>
        <div className="calc-button-style">1</div>
        <div className="calc-button-style">2</div>
        <div className="calc-button-style">3</div>
        <div className="operators-buttons calc-button-style">+</div>
        <div className="zero-button calc-button-style">0</div>
        <div className="calc-button-style">.</div>
        <div className="operators-buttons calc-button-style">=</div>
      </div>
    );
  }
}

export default Calculator;
