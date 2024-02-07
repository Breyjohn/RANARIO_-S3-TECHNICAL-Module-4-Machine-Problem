const resultInput = document.getElementById('result');
let expression = '';

function appendNumber(num) {
  expression += num;
  resultInput.value = expression;
}

function appendOperator(op) {
  if (expression !== '') {
    expression += op;
    resultInput.value = expression;
  }
}

function calculate() {
  try {
    const result = eval(expression);
    resultInput.value = result;
    expression = result;
  } catch (error) {
    resultInput.value = 'Error';
  }
}

function clearOutput() {
  expression = '';
  resultInput.value = '';
}

function removeLastCharacter() {
  expression = expression.slice(0, -1);
  resultInput.value = expression;
}