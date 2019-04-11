'use strict'; // обозначает что пишем на ES6

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp']; // Массив


// let answer = +prompt("Есть ли вам?", "Да"); // + превращает строку в число

// console.log(typeof(answer));

// console.log("arr" + " - object");
// console.log(4 + " - object");

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" == 2); // Сравнение по значениям
console.log("2" === 2);// Сравнение по типам данных

let isChecked = false,
    isClosed = false;

console.log(isChecked || !isClosed);
/* 
&& возвращает true
t + t = T
f + f = F
t + f = F
f + t = F

|| возвращает true
t + t = T
f + f = F
t + f = T
f + t = T

! инвертирует значение
*/