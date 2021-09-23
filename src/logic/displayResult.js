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

export default displayResult;
