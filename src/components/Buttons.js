import { v4 as uuidv4 } from 'uuid';

const Buttons = (props) => {
  const { calculate, calculatorObj, styles } = props;

  const BUTTONS_NAME = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  const OPERATORS = [
    '÷', 'x', '-', '+', '=',
  ];

  return (
    BUTTONS_NAME.map((name) => {
      if (OPERATORS.includes(name)) {
        return (
          <div key={uuidv4()} className={`${styles.operatorsButtons} ${styles.calcButtonStyle}`} role="button" tabIndex="0" onClick={() => calculate(calculatorObj, name)} onKeyPress={() => calculate(calculatorObj, name)}>{name}</div>
        );
      }

      if (name === '0') {
        return (
          <div key={uuidv4()} className={`${styles.zeroButton} ${styles.calcButtonStyle}`} role="button" tabIndex="0" onClick={() => calculate(calculatorObj, name)} onKeyPress={() => calculate(calculatorObj, name)}>{name}</div>
        );
      }

      return (
        <div key={uuidv4()} className={styles.calcButtonStyle} role="button" tabIndex="0" onClick={() => calculate(calculatorObj, name)} onKeyPress={() => calculate(calculatorObj, name)}>{name}</div>
      );
    })
  );
};

export default Buttons;
