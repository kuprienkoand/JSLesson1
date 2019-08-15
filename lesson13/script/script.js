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

  countTimer('1 september 2019');


  // Menu
  const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      /* if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
        menu.style.transform = `translate(0)`;
      } else {
        menu.style.transform = `translate(-100%)`;
      } // перепишем это условие */

      menu.classList.toggle('active-menu'); // метод добавляет/убирает класс
    };
    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);

    /* for (let i = 0; i < menuItems.length; i++){
      menuItems[i].addEventListener('click', handlerMenu);
    } // ниже переписан цмкл for в одну строку */

    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

  };
  toggleMenu();

  // popup

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelector('.popup-close'),
      popupContent = document.querySelector('.popup-content');

    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
                
        if (document.documentElement.clientWidth > 748) {
          let start = Date.now();

          const timer = setInterval(() => {
            let timePassed = Date.now() - start;

            if (timePassed >= 1500) {
              clearInterval(timer);
              return;
            }
            motion(timePassed);
          }, 20);

          const motion = (timePassed) => {
            popupContent.style.top = timePassed / 10 + 'px';
            popupContent.style.left = timePassed / 40 + '%';
          };
        } else {
          popup.style.display = 'block';
        }
      });
    });

    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  };

  togglePopUp();

});