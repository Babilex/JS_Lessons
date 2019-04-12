'use strict';

// let i = 55;
// alert(++i);

console.log([] + false - null + true); 
// Пустой массив преобразуется в пустую строку
// Поэтому 
//console.log([] + false); = false
//console.log([] + false - null) Теперь мы пытаемся от строки отнять число


let y = 1; 
let x = y = 2; 
console.log(x);

console.log([] + 1 + 2);

// alert( "1"[0] );
// Мы можем получить отдельный символ из  строки (прям как в массиве)
// Поэтому 1 - 0 символ в строке (отсчет с 0)
 alert( "1234234"[2] );
//

console.log(  0 || "" || 2 || undefined || true || falsе);

// alert( null || 2 && 3 || 4 ); // Оператор И выводит первое ложное значение!
// alert( +"Infinity" );