'use strict';

let money = +prompt('Ваш месячный доход?');
console.log('1) money:', typeof money);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('2) addExpenses (возможные расходы):', addExpenses.split(', '), typeof addExpenses);

let deposit  = confirm('Есть ли у вас депозит в банке?');
console.log('3) deposit (Есть ли у вас депозит в банке?):', typeof deposit);

let question = +prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    question2 = +prompt('Во сколько это обойдется?'),
    question3 = +prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    question4 = +prompt('Во сколько это обойдется?');

let budgetMonth = (money - question);
console.log('6) доход за месяц:', budgetMonth);

let mission = (question2 / budgetMonth);
console.log('7) за сколько месяцев будет достигнута цель:', parseInt(mission), 'месяцев');


let budgetDay = (budgetMonth / 30);
console.log('8) budgetDay:', Math.floor(budgetDay));

let n = budgetDay;
if (n > 800) {
  console.log('Высокий уровень дохода');
} else if (n <=800 && n > 300) {
  console.log('Средний уровень дохода');
} else if (n <=300 && n >= 0) {
  console.log('Низкий уровень дохода');
} else if (n < 0) {
  console.log('Что то пошло не так)))');
};