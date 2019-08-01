'use strict';

function DomElement(selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createElem = function(){
  /* let newElem;
  if (this.selector[0] === '.'){
    newElem = document.createElement('div');
    newElem.classList.add(this.selector.substr(1));
  } else if (this.selector[0] === '#'){
    newElem = document.createElement('p');
  } */
  if (this.selector.charAt(0) === '.') {
    let newElem = document.createElement('div');
    newElem.className = this.selector;
    newElem.innerHTML = 'Элемент div (блок)';
    newElem.style.cssText = 'height:' + this.height + 'px;' + 'width:' + this.width + 'px;' + 'background:' + this.bg + ';' + 'font-size:' + this.fontSize + 'px;';
    document.body.appendChild(newElem);
  } else if (this.selector.charAt(0) === '#'){
    let p = document.createElement('p');
    p.id = this.selector;
    p.innerHTML = 'Элемент р (параграф)';
    p.style.cssText = 'height:' + this.height + 'px;' + 'width:' + this.width + 'px;' + 'background:' + this.bg + ';' + 'font-size:' + this.fontSize + 'px;';
    document.body.appendChild(p);
  } else {
    document.write('неверный селектор');
  }
};

let newElem = new DomElement('.myBlock', 100, 500, 'green', 20);
console.log(newElem);
newElem.createElem();
/* let newDomElement = Object.create(DomElement);
console.log(newDomElement);
newDomElement.createElem(); */

