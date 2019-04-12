'use strict';

// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

function calc(a, b) {
    return(a + b);
}

console.log(calc(3,6));
console.log(calc(9,6));
console.log(calc(10,6));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

// функции можно вызывать до обьявления! Точно так же как и var

let calc2 = function(a, b) {
    return(a + b);
}

// эты функция вызывается после обьявления!

// ES6 и новые стандарты!

let calcES6 = (a, b) => a-b

console.log(calcES6(5, 9));

let str = "test"
console.log("Length of message str: " + str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.1";
console.log(Math.round(twelve));

let twelvepx = "12.1px";
console.log(parseInt(twelve));
console.log(parseFloat(twelve));