  'use strict';

  import "@babel/polyfill";
  import 'nodelist-foreach-polyfill';
  import elementClosest from 'element-closest';
  elementClosest(window);
  import 'formdata-polyfill';
  import 'es6-promise';
  import 'fetch-polyfill';

  import countTimer from './modules/countTimer';
  import toggleMenu from './modules/toggleMenu';
  import togglePopUp from './modules/togglePopUp';
  import tabs from './modules/tabs';
  import slider from './modules/slider';
  import photos from './modules/photos';
  import number from './modules/number';
  import calc from './modules/calc';
  import sendForm from './modules/sendForm';
  import formValidationPhone from './modules/formValidationPhone';
  import onlyCyrillic from './modules/onlyCyrillic';

  // Timer
  countTimer('1 september 2019');
  // Menu
  toggleMenu();
  // Popup
  togglePopUp();
  //Tabs
  tabs();
  // Slides
  slider();
  // Change photos Наша Команда
  photos();
  // Only number
  number();
  // calculator
  calc(100);
  // send-ajax-form
  sendForm();
  // Only number and '+'
  formValidationPhone();
  // Only cyrillic and 'space'
  onlyCyrillic();