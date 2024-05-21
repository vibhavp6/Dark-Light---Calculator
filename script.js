let operator = '';
let value1 = '';
let value2 = '';

const display = document.getElementById('display');
const nums = Array.from(document.getElementsByClassName('num'));
const operators = Array.from(document.getElementsByClassName('operator'));
const equal = document.getElementsByClassName('equal')[0];
const clear = document.getElementsByClassName('clear')[0];

nums.forEach(num => {
  num.addEventListener('click', () => {
    value1 += num.textContent;
    display.value = value1;
  });
});

operators.forEach(op => {
  op.addEventListener('click', () => {
    operator = op.textContent;
    value2 = value1;
    value1 = '';
    display.value = operator;
  });
});

equal.addEventListener('click', () => {
  value1 = eval(value2 + operator + value1);
  display.value = value1;
});

clear.addEventListener('click', () => {
  value1 = '';
  value2 = '';
  operator = '';
  display.value = '';
});
