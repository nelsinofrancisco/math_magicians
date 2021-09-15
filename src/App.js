import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorObj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(obj) {
    this.setState(
      {
        calculatorObj: obj,
      },
    );
  }

  render() {
    const { calculatorObj } = this.state;
    return (
      <div className="App">
        <Calculator
          updateState={this.updateState}
          calculatorObj={calculatorObj}
        />
      </div>
    );
  }
}
export default App;
