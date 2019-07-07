'use strict';

let money = +prompt('Ваш месячный доход?');

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

let deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeof = function (item) {
  console.log(item, typeof item);
};

showTypeof(money);
showTypeof(addExpenses);
showTypeof(deposit);

let question = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
  question2 = +prompt('Во сколько это обойдется?'),
  question3 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
  question4 = +prompt('Во сколько это обойдется?');

function getExpensesMonth() {
  return question2 + question4;
};
/* console.log('getExpensesMonth(): ', getExpensesMonth()); */

let budgetMonth = money - (question2 + question4);
/* console.log('6) доход за месяц:', budgetMonth); */

let accumulatedMonth = function getAccumulatedMonth() {
  console.log('Накопления за месяц (accumulatedMonth): ', budgetMonth);
};
accumulatedMonth();

let mission = +prompt('Цель: сколько Вы хотите заработать?'),
  period = mission / budgetMonth;
/* console.log('7) за сколько месяцев будет достигнута цель:', parseInt(period), 'месяцев'); */

let getTargetMonth1 = function getTargetMonth() {
  return mission / accumulatedMonth;
};
console.log('Cрок достижения цели', Math.floor(getTargetMonth1), 'месяцев');


let budgetDay = budgetMonth / 30;
/* console.log('8) budgetDay:', Math.floor(budgetDay)); */

function getStatusIncome() {
  let n = budgetDay;
  if (n > 800) {
    return ('Высокий уровень дохода');
  } else if (n <= 800 && n > 300) {
    return ('Средний уровень дохода');
  } else if (n <= 300 && n >= 0) {
    return ('Низкий уровень дохода');
  } else if (n < 0) {
    return ('Что то пошло не так)))');
  }
}
console.log('getStatusIncome(): ', getStatusIncome());
