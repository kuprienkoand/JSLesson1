'use strict';

let nowDate = new Date(),
  greeting = document.createElement('div'),
  today = document.createElement('div'),
  time = document.createElement('div'),
  newYearLeft = document.createElement('div');
 

function getDayTime() {
  let hours = nowDate.getHours();

  if (hours >= 23 || hours < 5) {
    return ('Доброй ночи');
  }
  else if (hours >= 5 && hours < 11) {
    return ('Доброе утро');
  }
  else if (hours >= 11 && hours < 18) {
    return ('Добрый день');
  }
  else if (hours >= 18 && hours < 23) {
    return ('Добрый вечер');
  }
}

function weekDay(nowDate) {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  return days[nowDate.getDay()];
}

function timerNewYearLeft() {

  let date = new Date('01 january 2020'),
    msPerDay = 24 * 60 * 60 * 1000,
    daysLeft = Math.floor((date.getTime() - nowDate.getTime()) / msPerDay),
    day = '',
    dayStr = '' + daysLeft,
    dayName = parseInt(dayStr.substr(dayStr.length - 1));

  if (daysLeft > 4 && daysLeft < 21) {
    day = ' дней';
  }
  else if (dayName == 1) {
    day = ' день';
  }
  else if (dayName == 2 || dayName == 3 || dayName == 4) {
    day = ' дня';
  }
  else {
    day = ' дней';
  }
  return `${daysLeft} ${day}`;
}

greeting.textContent = `${getDayTime()}`;
today.textContent = `Сегодня: ${weekDay(nowDate)}`;
time.textContent = `Текущее время: ${nowDate.toLocaleTimeString('en')}`;
newYearLeft.textContent = `До нового года осталось ${timerNewYearLeft()}`;

document.body.appendChild(greeting);
document.body.appendChild(today);
document.body.appendChild(time);
document.body.appendChild(newYearLeft);