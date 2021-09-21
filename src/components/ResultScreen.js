/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import displayResult from '../logic/displayResult';

const ResultScreen = (props) => {
  const { calculatorObj, styles } = props;

  return (
    <div id="result" className={`${styles.resultDisplay} ${styles.calcButtonStyle}`}>
      {displayResult(calculatorObj) }
    </div>
  );
};

ResultScreen.propTypes = {
  calculatorObj: PropTypes.instanceOf(Object).isRequired,
  styles: PropTypes.any.isRequired,
};

export default ResultScreen;
