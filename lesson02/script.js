let money = 500, // Доход за месяц
    income = 'Дополнительный доход с консультаций',
    addExpenses = 'Оренда помещения, Элетроэнергия, Вода',
    deposit = true, 
    mission = 5000,
    period  = 6;

console.log('money =', typeof money);
console.log('income =', typeof income);
console.log('deposit =', typeof Boolean(500));

console.log('длина строки income =', income.length);

console.log('Период', period, 'месяцев');
console.log('Цель заработать', mission, 'рублей/долларов/гривен/юани');

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay;

console.log('budgetDay =', money / 30);
console.log('Остаток от деления =', money % 30);
