'use strict';

let myBtn = document.getElementsByTagName('button'),
  myRes1 = document.getElementsByClassName('result-budget_day'),
  myRes2 = document.getElementsByClassName('result-expenses_month'),
  myRes3 = document.getElementsByClassName('result-additional_income'),
  myRes4 = document.getElementsByClassName('result-additional_expenses'),
  myRes5 = document.getElementsByClassName('result-income_period'),
  myRes6 = document.getElementsByClassName('result-target_month'),
  salAm = document.querySelector('.salary-amount'),
  incTitle = document.querySelector('.income-title'),
  incAm = document.querySelector('.income-amount'),
  expTitle = document.querySelector('.expenses-title'),
  expAm = document.querySelector('.expenses-amount'),
  expItem = document.querySelector('.additional_expenses-item'),
  tarAm = document.querySelector('.target-amount'),
  perSel = document.querySelector('.period-select'),
  resBud = document.querySelector('.result-budget_month');

console.log('a: ', document.getElementById('start'));

console.log('b: ', myBtn[0]);
console.log(myBtn[1]);

console.log('c: ', document.querySelector('#deposit-check'));

console.log('d: ', document.querySelectorAll('.additional_income-item'));

console.log('e: ', myRes1[0]);
console.log(myRes2[0]);
console.log(myRes3[0]);
console.log(myRes4[0]);
console.log(myRes5[0]);
console.log(myRes6[0]);

console.log('f: ', salAm);
console.log(incTitle);
console.log(incAm);
console.log(expTitle);
console.log(expAm);
console.log(expItem);
console.log(tarAm);
console.log(perSel);
console.log(resBud);