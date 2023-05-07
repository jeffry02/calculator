import { Display } from "./display.js";

document.querySelector('.dark-mode-switch').onclick = () => {
  document.querySelector('body').classList.toggle('dark');
  document.querySelector('body').classList.toggle('light');
}

const displayPreviousValue = document.querySelector('#previousValue');
const displayCurrentValue = document.querySelector('#currentValue');
const numbersBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const erraseBtn = document.querySelector('.eraseAll');
const erraseOneBtn = document.querySelector('.eraseOne');


const display = new Display(displayPreviousValue, displayCurrentValue);

numbersBtn.forEach(buttonEl => {
  buttonEl.addEventListener('click', () => display.numberAdd(buttonEl.innerHTML));
});

operatorBtn.forEach(buttonEl => {
  buttonEl.addEventListener('click', () => display.computar(buttonEl.value));
}); 

erraseBtn.addEventListener('click', () => display.eraseAll());

erraseOneBtn.addEventListener('click', () => display.erase());