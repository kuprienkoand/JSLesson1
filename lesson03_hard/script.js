'use strict';

/* Условия через if */

let lang = prompt('Укажите язык ru или en','ru');
if (lang === 'ru') {
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение');  
} else if (lang === 'en') {
  console.log('Monday, Tuesday, Thursday, Friday, Saturday, Sunday');
};


/* Условия через switch-case */

let langCase = prompt('Укажите язык ru или en');
switch (langCase) {
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение');
    break;
  case 'en':
    console.log('Monday, Tuesday, Thursday, Friday, Saturday, Sunday');
}

/* Условия через многомерный массив */

let langArr = prompt('Укажите язык ru или en');
console.log({
  'ru': ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение'],
  'en': ['Monday, Tuesday, Thursday, Friday, Saturday, Sunday']
});


let namePerson = prompt('Укажите имя Артем или Максим'),
    result = namePerson === 'Артем' ? 'директор' : 'студент';
    result = namePerson === 'Максим' ? 'преподаватель' : 'студент';
console.log(result);
