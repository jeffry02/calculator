import { Calculator } from "./calculator.js";

export class Display {
  constructor (displayPreviousValue, displayCurrentValue) {
  this.displayCurrentValue = displayCurrentValue;
  this.displayPreviousValue = displayPreviousValue;
  this.calculator = new Calculator();
  this.operatortype = undefined;
  this.currentValue = '';
  this.previousValue = '';
  this.signos = {
    sum: '+',
    divide: '%',
    multiply: 'X',
    subtract: '-',
  }
  }

  erase() { 
    this.currentValue = this.currentValue.toString().slice(0,-1);
    this.printValues();
  }
  
  eraseAll() { 
    this.currentValue = '';
    this.previousValue = '';
    this.operatortype = undefined;
    this.printValues();
  }

  computar(type) {
    this.operatortype !== 'equal' && this.operation();
    this.operatortype = type;
    this.previousValue = this.currentValue || this.previousValue; 
    this.currentValue = '';
    this.printValues();
  }

  numberAdd(num) {
    if(num === '.' && this.currentValue.includes('.')) return
    this.currentValue = this.currentValue.toString() + num.toString();
    this.printValues();
  }

  printValues() { 
    this.displayCurrentValue.textContent = this.currentValue;
    this.displayPreviousValue.textContent = `${this.previousValue} ${this.signos[this.operatortype] || ''}`
  }

  operation() { 
    const previousValue = parseFloat(this.previousValue);
    const currentValue = parseFloat(this.currentValue);

    if(isNaN(currentValue) || isNaN(previousValue)) return

    this.currentValue = this.calculator[this.operatortype](previousValue, currentValue);
  }
}