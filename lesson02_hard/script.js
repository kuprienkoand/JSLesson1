let num = 266219;

let multi = num.toString().split('').map(Number).reduce(function (a, b) { return a * b });
console.log('произведение (умножение) цифр числа 266219 =', multi);

let cube = multi ** 3;
console.log('далее результат в степени 3, первые 2 цифры =', cube.toString().slice(0, 2));