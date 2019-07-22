'use strict';

let collect = document.querySelectorAll('.books'),
  book = document.querySelectorAll('.book'),
  textBook = document.getElementsByTagName('a'),
  adv = document.querySelector('.adv'),
  myLi = document.querySelectorAll('li'),
  myUl = document.querySelectorAll('ul'),
  body = document.querySelectorAll('body');

collect[0].insertBefore(book[1], book[0]);
collect[0].insertBefore(book[4], book[2]);
collect[0].insertBefore(book[2], book[6]);

document.body.style.backgroundImage = 'url(./image/adv.jpg)';

textBook[2].textContent = 'Книга 3. this и Прототипы Объектов';

body[0].removeChild(adv);

myUl[0].insertBefore(myLi[6], myLi[4]);
myUl[0].insertBefore(myLi[8], myLi[4]);
myUl[0].insertBefore(myLi[2], myLi[10]);
myUl[5].insertBefore(myLi[55], myLi[48]);
myUl[5].insertBefore(myLi[48], myLi[51]);
myUl[5].insertBefore(myLi[51], myLi[54]);

let newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
myUl[2].appendChild(newElem);
myUl[2].insertBefore(newElem, myLi[26]);

console.log(collect, book, adv, body, myUl, myLi);