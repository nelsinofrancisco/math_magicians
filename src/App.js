import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      somethingUseless: true,
    };
  }

  render() {
    const { somethingUseless } = this.state;
    if (somethingUseless) {
      return (
        <div className="App">
          <Calculator />
        </div>
      );
    }
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
export default App;
