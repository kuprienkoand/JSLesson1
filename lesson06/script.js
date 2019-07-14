'use strict';

let money,
  start = function () {
    do {
      money = +prompt('Ваш месячный доход?', 5000);
    }
    while (isNaN(money) || money == '' || money == null)
  };
  
  start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 5000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function(){
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
          let myCount = function () {
            let sum;
            do {
              sum = prompt('Во сколько это обойдется?', 200);
            }
            while (isNaN(sum) || sum == '' || sum == null);
            return sum;
          }

          if (i === 0) {
            appData.expenses[prompt('Какие обязательные ежемесячные расходы у вас есть?', "Вода, электричество")] = myCount();
          } else if (i === 1) {
            appData.expenses[prompt('Какие обязательные ежемесячные расходы у вас есть?', "Газ, Продукты")] = myCount();
          };
        }
  },
  getExpensesMonth: function() {
    for (let key in appData.expenses){
      appData.expensesMonth += +appData.expenses[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },
  queTargetMonth: function() {
    let t = getTargetMonth();
    if (t >= 0) {
      return ('Цель будет достигнута');
    } else if (t < 0) {
      return ('Цель не будет достигнута');
    }
  },
  getStatusIncome: function() {
    let n = appData.budgetDay;
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
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();

let mission = +prompt('Цель: сколько Вы хотите заработать?', 5000),
    period = mission / appData.budgetMonth;

function getTargetMonth() {
  return appData.mission / appData.budgetMonth;
}

for (let key in appData){
  console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}

/* let showTypeof = function (item) {
  console.log(typeof item);
}
showTypeof(money);
showTypeof(appData.addExpenses);
showTypeof(appData.deposit); */

console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('Уровень дохода: ', appData.getStatusIncome());
console.log('Будет ли цель достигнута? ', appData.queTargetMonth());
console.log('Cрок достижения цели', Math.ceil(getTargetMonth()), 'месяцев');