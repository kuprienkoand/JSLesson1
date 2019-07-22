'use strict';

let myBtn = document.getElementsByTagName('button'),
  myBtnZero = myBtn[0],
  myBtnOne = myBtn[1],
  resBud = document.querySelector('.budget_month-value'),
  myRes1 = document.getElementsByClassName('budget_day-value'),
  myRes2 = document.getElementsByClassName('expenses_month-value'),
  myRes3 = document.getElementsByClassName('additional_income-value'),
  myRes4 = document.getElementsByClassName('additional_expenses-value'),
  myRes5 = document.getElementsByClassName('income_period-value'),
  myRes6 = document.getElementsByClassName('target_month-value'),
  salAm = document.querySelector('.salary-amount'),
  incTitle = document.querySelector('.income-title'),
  incAm = document.querySelector('.income-amount'),
  expTitle = document.querySelector('.expenses-title'),
  expAm = document.querySelector('.expenses-amount'),
  expItem = document.querySelector('.additional_expenses-item'),
  tarAm = document.querySelector('.target-amount'),
  perSel = document.querySelector('.period-select');

console.log('a: ', document.getElementById('start'));

console.log('b: ', myBtnZero);
console.log(myBtnOne);

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