'use strict';

let start = document.getElementById('start'),
  myBtn = document.getElementsByTagName('button'),
  incomePlus = myBtn[0],
  expensesPlus = myBtn[1],
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
  depositCheck = document.querySelector('#deposit-check'),
  budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
  budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
  expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
  additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
  additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
  incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
  targetMonthValue = document.getElementsByClassName('target_month-value')[0],
  salaryAmount = document.querySelector('.salary-amount'),
  incomeTitle = document.querySelector('.income-title'),
  // incomeAmount = document.querySelector('.income-amount'),
  expensesTitle = document.querySelector('.expenses-title'),
  // expensesAmount = document.querySelector('.expenses-amount'),
  expensesItems = document.querySelectorAll('.expenses-items'),
  additionalExpenses = document.querySelector('.additional_expenses'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select'),
  periodAmount = document.querySelector('.period-amount'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  incomeItems = document.querySelectorAll('.income-items'),
  inputTypeText = document.querySelectorAll('.data input[type=text]'),
  cancel = document.getElementById('cancel');

/* let money; */

let appData = {
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  // mission: 5000,
  // period: 3,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function () {

    /* do {
      money = prompt('Ваш месячный доход?', 5000);
    }
    while (isNaN(money) || money == '' || money == null); */

    if (salaryAmount.value === ''){
      alert('Введите данные в поле Месячный доход');
      return;
    }
    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.getAddExpenses();

    appData.showResult();

    appData.cancelBlock();
  },
  cancelBlock: function(){
    inputTypeText.forEach(function(item){
      item.disabled = true;
    });
    start.style.display = 'none';
    cancel.style.display = 'block';
  },
  showResult: function(){
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = Math.ceil(appData.budgetDay);
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcPeriod();

    periodSelect.addEventListener('change', function(){
      incomePeriodValue.value = appData.calcPeriod();
    })
  },
  addIncomeBlock: function(){

    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3){
      incomePlus.style.display = 'none';
    }
  },
  addExpensesBlock: function(){
    
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3){
      expensesPlus.style.display = 'none';
    }
  },
  getExpenses: function(){
    expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !== ''){
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getIncome: function(){
    incomeItems.forEach(function(item){
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !=='' && cashIncome !== ''){
        appData.income[itemIncome] = cashIncome;
        appData.incomeMonth += +cashIncome;
      }
    });

    /* if (confirm('Есть ли у вас дополнительный источник заработка?')) {
      let itemIncome;
      do {
        itemIncome = prompt('Какой у вас дополнитеьный зароботок?', 'Таксую');
      }
      while (itemIncome == +itemIncome || itemIncome == null || itemIncome == '');
      let cashIncome;
      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 1000);
      }
      while (isNaN(cashIncome) || cashIncome == '' || cashIncome == null);
      appData.income[itemIncome] = cashIncome;
    }

    for (let key in appData.income){
      appData.incomeMonth += +appData.income[key];
    } */
  },
  getAddExpenses: function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if (item !== ''){
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function(){
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if (itemValue !== ''){
        appData.addIncome.push(itemValue);
      }
    });
  },
  /* asking: function(){

    

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.split(',');
        let expResult;
        let myArr = [];
        for (let key in appData.addExpenses) {
          expResult = appData.addExpenses[key].trim();
          expResult = expResult.charAt(0).toUpperCase() + expResult.slice(1);
          myArr.push(expResult);
        }
        
        appData.addExpenses = myArr;
        for (let i = 0; i < 2; i++) {
          let myCount = function () {
            let sum;
            do {
              sum = prompt('Во сколько это обойдется?', 200);
            }
            while (isNaN(sum) || sum == '' || sum == null);
            return sum;
          };
          
          if (i === 0) {
            appData.expenses[prompt('Какие обязательные ежемесячные расходы у вас есть?', "Вода, электричество")] = myCount();
          } else if (i === 1) {
            appData.expenses[prompt('Какие обязательные ежемесячные расходы у вас есть?', "Газ, Продукты")] = myCount();
          }
        }
  }, */
  getRangeAmount: function(){
    periodAmount.innerHTML = periodSelect.value;
  },
  getInfoDeposit: function () {
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    if (appData.deposit) {
      appData.percentDeposit = prompt('Какой годовой процент?', '1');
      appData.moneyDeposit = prompt('Какая сумма заложена?', 1000);
    }
  },
  getExpensesMonth: function() {
    for (let key in appData.expenses){
      appData.expensesMonth += +appData.expenses[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },
  getTargetMonth: function() {
    return targetAmount.value / appData.budgetMonth;
  },
  queTargetMonth: function() {
    let t = appData.getTargetMonth();
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
  },
  calcPeriod: function(){
    return appData.budgetMonth * periodSelect.value;
  }
};

start.addEventListener('click', appData.start);

incomePlus.addEventListener('click', appData.addIncomeBlock);
expensesPlus.addEventListener('click', appData.addExpensesBlock);

periodSelect.addEventListener('input', appData.getRangeAmount);

/* let mission = +prompt('Цель: сколько Вы хотите заработать?', 5000),
    period = mission / appData.budgetMonth; */

// console.log('Расходы за месяц: ', appData.expensesMonth);
// console.log('Уровень дохода: ', appData.getStatusIncome());
// console.log('Будет ли цель достигнута? ', appData.queTargetMonth());
// console.log('Cрок достижения цели', Math.ceil(getTargetMonth()), 'месяцев');
// console.log('appData.addExpenses', appData.addExpenses);
// console.log('Обязательные расходы: ', appData.addExpenses.join(', '));