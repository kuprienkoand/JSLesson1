window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  // Timer
  function countTimer(deadline){ // deadline - время до которого таймер будет отсчитывать
    let timerHours = document.querySelector('#timer-hours'), // получаем элемент со страницы
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds'),
      timerNumbers = document.querySelector('.timer-numbers');


    function getTimeRemaining(){
      let dateStop = new Date(deadline).getTime(), // конечная дата
        dateNow = new Date().getTime(), // текущая дата
        timeRemaining = (dateStop - dateNow) / 1000, // перевод из мс в сек
        seconds = Math.floor(timeRemaining % 60), // остаток от деления на 60
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60) % 24,
        day = Math.floor(timeRemaining / 60 / 60 / 24);

        if (seconds < 10 ) {
          seconds = '0' + seconds;
        } else if (minutes < 10 ) {
          minutes = '0' + minutes;
        } else if (hours <  10 ) {
          hours = '0' + hours;
        }
        return {timeRemaining, hours, minutes, seconds};
    }

    function updateClock() {
      let timer = getTimeRemaining();

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;

      if(timer.timeRemaining > 0){
        setTimeout(updateClock, 1000);
      } 
      else if (timer.timeRemaining <= 0) {
          timerHours.textContent = '00';
          timerMinutes.textContent = '00';
          timerSeconds.textContent = '00';
          timerNumbers.style.color = 'red';

          setInterval(updateClock, 1000);
        }
      }
    
    updateClock();
    
  }

  countTimer('15 august 2019');

});