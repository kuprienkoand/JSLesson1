'use strict';

const start = document.getElementById('start'),
  cancel = document.getElementById('cancel');

let myBtn = document.getElementsByTagName('button'),
  btnPlus = document.querySelectorAll('.btn_plus'),
  incomePlus = myBtn[0],
  expensesPlus = myBtn[1],
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
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
  depositBank = document.querySelector('.deposit-bank'),
  depositAmount = document.querySelector('.deposit-amount'),
  depositPercent = document.querySelector('.deposit-percent'),
  depositCheck = document.querySelector('#deposit-check'),
  incomeExpenses = document.querySelectorAll('.income-items input, .expenses-items input');

/* let money; */

class AppData {
  constructor(){
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  // mission: 5000,
  // period: 3,
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  }

  start() {

    if (salaryAmount.value === ''){
      alert('Введите данные в поле Месячный доход');
      return;
    }

    this.budget = +salaryAmount.value;
    // this.getExpenses();
    // this.getIncome();
    this.getExpensesIncome(expensesItems, 'expenses', this.expenses);
    this.getExpensesIncome(incomeItems, 'income', this.income);
    this.getExpensesMonth();
    this.getIncomeMonth();
    this.getInfoDeposit();
    this.getBudget();
    this.getAddExpenses();
    this.getAddIncome();

    this.showResult();
    this.cancelBlock();
    
  }
  cancelBlock()  {
    inputTypeText = document.querySelectorAll('.data input[type=text]');
    inputTypeText.forEach((item) => {
        item.disabled = true;
      });
      btnPlus.forEach((item) => {
        item.disabled = true;
      });
    start.style.display = 'none';
    cancel.style.display = 'block';
  }
  showResult() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    
    periodSelect.addEventListener('change', function(){
      incomePeriodValue.value = this.calcPeriod();
    });
  }
  addIncomeExpensesBlock(items, elem, btn) {
    let cloneItem = items[0].cloneNode(true);
    items[0].parentNode.insertBefore(cloneItem, btn);
    items = document.querySelectorAll(`.${elem}-items`);
    if (items.length === 3) {
      btn.style.display = 'none';
    }
    cloneItem.querySelectorAll('input').forEach((item) => {
      item.value = '';
    });
  }
  /* addIncomeBlock() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3){
      incomePlus.style.display = 'none';
    }
    cloneIncomeItem.querySelectorAll('input').forEach((item) => {
      item.value = '';
    });
  }
  addExpensesBlock() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3){
      expensesPlus.style.display = 'none';
    }
    cloneExpensesItem.querySelectorAll('input').forEach((item) => {
      item.value = '';
    });
  }   */
  getExpensesIncome(items, elem, exin) {
    items = document.querySelectorAll(`.${elem}-items`);
    items.forEach((item) => {
      const itemTitle = item.querySelector(`.${elem}-title`).value;
      const cashAmount = item.querySelector(`.${elem}-amount`).value;
      if (itemTitle !== '' && cashAmount !== '') {
        exin[itemTitle] = cashAmount;
      }
    });
  }
  /* getExpenses() {
    expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !== ''){
        this.expenses[itemExpenses] = cashExpenses;
      }
    });
  }
  getIncome() {
    incomeItems.forEach((item) => {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !=='' && cashIncome !== ''){
        this.income[itemIncome] = cashIncome;
      }
    }); 
  } */
  getAddExpenses() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== ''){
        this.addExpenses.push(item);
      }
    });
  }
  getAddIncome() {
    additionalIncomeItem.forEach((item) => {
      let itemValue = item.value.trim();
      if (itemValue !== ''){
        this.addIncome.push(itemValue);
      }
    });
  }
  getInfoDeposit() {
    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }
  }
  getExpensesMonth() {
    for (let key in this.expenses){
      this.expensesMonth += +this.expenses[key];
    }
  }
  getIncomeMonth() {
    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  }
  getBudget() {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) /12;
    this.budgetDay = this.budgetMonth / 30;
  }
  getTargetMonth() {
    return targetAmount.value / this.budgetMonth;
  }
  queTargetMonth() {
    let t = this.getTargetMonth();
    if (t >= 0) {
      return ('Цель будет достигнута');
    } else if (t < 0) {
      return ('Цель не будет достигнута');
    }
  }
  getStatusIncome() {
    let n = this.budgetDay;
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
  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  }
  reset() {
    inputTypeText.forEach((item) => {
      item.disabled = false;
      item.value = '';
    });
      btnPlus.forEach((item) => {
        item.disabled = false;
      });
    start.style.display = 'block';
    cancel.style.display = 'none';

    periodSelect.value = 1;
    periodAmount.innerHTML = 1;

    incomePlus.style.display = 'block';
    expensesPlus.style.display = 'block';
  }
  depositCheck() {
    if (depositCheck.checked) { // равенство на true не обязательно,  === true
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = 'true';
      depositBank.addEventListener('change', function () {
        let selectIndex = this.options[this.selectedIndex].value;
        if (selectIndex === 'other') {
          depositPercent.style.display = 'inline-block';
          depositPercent.disabled = false;
          depositPercent.value = '';
        } else {
          depositPercent.disabled = true;
          // depositPercent.style.display = 'none'; // окно остается неактивное
          depositPercent.value = selectIndex;
        }
      });
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositAmount.value = '';
      this.deposit = 'false';
    }
  }
  eventsListeners() {
    start.addEventListener('click', this.start.bind(appData));
    cancel.addEventListener('click', this.reset.bind(appData));


    incomePlus.addEventListener('click', () => {
      this.addIncomeExpensesBlock(incomeItems, 'income', incomePlus);
    });
    expensesPlus.addEventListener('click', () => {
      this.addIncomeExpensesBlock(expensesItems, 'expenses', expensesPlus);
    });

    periodSelect.addEventListener('change', () => {
      periodAmount.innerHTML = periodSelect.value;
    });

    depositCheck.addEventListener('change', this.depositCheck);
  }
}

let appData = new AppData();
appData.eventsListeners();