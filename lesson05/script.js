'use strict';

let money,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    question,
    question3;

let showTypeof = function (item) {
  console.log(item, typeof item);
}
showTypeof(money);
showTypeof(addExpenses);
showTypeof(deposit);

/* валидация переменной money */

let start = function(){

  do{
    money = +prompt('Ваш месячный доход?', 5000);
    console.log(money);
  }
  while (isNaN(money) || money == '' || money == null)
}

start();

function getExpensesMonth() {
  let sum = 0;

  for(let i = 0; i < 2; i++){
    if(i === 0){
      question = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Вода, электричество");
    } else if(i === 1){
      question3 = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Газ, Продукты");
    }

    do{
      sum += +prompt('Во сколько это обойдется?', 200);
      console.log(sum);
    }
    while (isNaN(sum) || sum == '' || sum == null)
  }

  return sum;
}

let expensesAmount = getExpensesMonth();

let accumulatedMonth = getAccumulatedMonth();
function getAccumulatedMonth() {
  return money - expensesAmount;
}

let budgetMonth = accumulatedMonth;

let mission = +prompt('Цель: сколько Вы хотите заработать?', 5000),
    period = mission / budgetMonth;

function getTargetMonth() {
  return mission / accumulatedMonth;
}

function queTargetMonth(){
  let t = getTargetMonth();
  if (t >= 0) {
    return ('Цель будет достигнута');
  } else if (t < 0) {
    return ('Цель не будет достигнута');
  }
}

let budgetDay = budgetMonth / 30;

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

console.log('Уровень дохода: ', getStatusIncome());
console.log('Будет ли цель достигнута? ', queTargetMonth());
console.log('Cрок достижения цели', Math.ceil(getTargetMonth()), 'месяцев');