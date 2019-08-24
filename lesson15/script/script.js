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
        }
        if (minutes < 10 ) {
          minutes = '0' + minutes;
        } 
        if (hours <  10 ) {
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
          clearInterval(IdInterval);
          timerHours.textContent = '00';
          timerMinutes.textContent = '00';
          timerSeconds.textContent = '00';
          timerNumbers.style.color = 'red';

          // setInterval(updateClock, 1000);
        }
      }
    let IdInterval = setInterval(updateClock, 1000);
    
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
    // btnMenu.addEventListener('click', handlerMenu);
    // closeBtn.addEventListener('click', handlerMenu);

    /* for (let i = 0; i < menuItems.length; i++){
      menuItems[i].addEventListener('click', handlerMenu);
    } // ниже переписан цикл for в одну строку */

    // menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

    document.addEventListener('click', (event) => {
      let target = event.target;
      
      if(target.classList.contains('close-btn')) {
        handlerMenu();
      } else if (target.closest('menu ul>li')) {
        handlerMenu();
      } else if (target.classList.contains('active-menu')) {
        handlerMenu();
      } else {
        target = target.closest('.menu');
         
        if (target) {
          handlerMenu();
        } else if (!target) {
          menu.classList.remove('active-menu');
        }
      }
    });

  };
  
  toggleMenu();

  // Popup

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      // popupClose = document.querySelector('.popup-close'),
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

   /*  popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    }); */

    popup.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('popup-close')){
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');

        if (!target) {
          popup.style.display = 'none';
        }

      }        
    });
  };

  togglePopUp();

  //Tabs

  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

              /* следующая функция будет перебирать все табы, 
              находить соответсвующий по index и его показывать,
              а те которые не нужны, будут скрываться, добавляя класс d-none */
              
    const toggleTabContent = (index) => {
      for (let i =0; i < tabContent.length; i++){
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

      tabHeader.addEventListener('click', (event) => {
        let target = event.target;
         target = target.closest('.service-header-tab'); // этот метод проверяет у элемента селектор
        // while(target !== tabHeader){
          // if (target.classList.contains('service-header-tab')){
            if (target) {
            tab.forEach((item, i) => {
              if (item === target){
                toggleTabContent(i);
              }
            });
            // return; // можно и убрать, но на всякий случай пусть остается
          }
          // target = target.parentNode;
        // }
      });
  };

  tabs();

  // Slides

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      btn = document.querySelector('.portfolio-btn'),
      // dot = document.querySelectorAll('.dot'),
      slider = document.querySelector('.portfolio-content'),
      portfolioDots = document.querySelector('.portfolio-dots');

    const addDots = () => {
      slide.forEach(() => {
        let dotLi = document.createElement('li');

        dotLi.classList.add('dot');
        portfolioDots.appendChild(dotLi);
      });
    };

    addDots();

    const dot = document.querySelectorAll('.dot');

    let currentSlide = 0,
      interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {

      // slide[currentSlide].classList.remove('portfolio-item-active'); // убираем класс у текущего слайда и добавляем класс следующему слайду
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      // slide[currentSlide].classList.add('portfolio-item-active'); // следующему слайду добавляем класс portfolio-item-active
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time); 
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault(); // отключение управление слайдером

      let target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {  // ограничение, клик по слайду не влияет, не вызывает событие слайда
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')){
        currentSlide++;
      } else if (target.matches('#arrow-left')){
        currentSlide--;
      } else if (target.matches('.dot')){
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')){
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')) {
        startSlide();
      }
    });

    startSlide(1500);
     
  };

  slider();

  // Change photos Наша Команда

  const photos = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');

    commandPhoto.forEach(item => {
      let change;

      item.addEventListener('mouseenter', (event) => {
        change = event.target.src;
        event.target.src = event.target.dataset.img;
      });

      item.addEventListener('mouseleave', (event) => {
        event.target.src = change;
      });
    });
  };

  photos();

  // Only number

  const number = () => {
    const calcItem = document.querySelectorAll('.calc-item');

    calcItem.forEach(item => {
      item.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/\D/gi, '');
      });
    });
  };

  number();

});