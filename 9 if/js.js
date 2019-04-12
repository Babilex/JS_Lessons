'use strict';

// var i = 123;

// console.log(i);

if (4*4 == 8) {
    console.log("Верно!");
} else {
    console.log("Неверно!")
}

if (1) { // проверяет boolean. В данном примере 1 - true
    console.log("Верно!");
} else {
    console.log("Неверно!")
}

//  Множество IF
let num = 50;

if (num < 49) {
    console.log("Неверно!");
} else if (num > 100) {
    console.log("Много")
} else {
    console.log("Верно!")
}

// Другая запись IF в виде тернарного оператора
(num == 50) ? console.log("Верно!") : console.log("Неверно!");
// (условие) ? если True : если false;

switch(num) {
    case num < 49:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("Неверно!");
        break;
    case num > 80:
        console.log("Неверно");
        break;
    case 50:
        console.log("Верно!")
        break;
    default:
        console.log("Err");
        break;
}

// break в конце всегда
// проверка на значение записывается обычным числом