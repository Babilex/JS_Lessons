'use strict';

// let arr = [1, 2, 3, 4, 5];

// arr.pop();
// console.log(arr);

// arr.push("5");
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift('1');
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let mass = [1, 2, 3, 4, 5];
// mass [99] = 99;
// console.log('Ellements in massive: ' + arr.length);
// console.log(mass);

// let array = ['first', 'second', 3, 4, 5];
// array.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' (массив: ' + mass + ")");
// });
// console.log(' ');

// let massive = [1, 5, 7, 4, 2]
// for (let key in massive) {
//     console.log(key);
// }
// console.log(' ');
// for (let key of massive) {
//     console.log(key);
// }

// let answer = prompt('' , ''),
//     arr = [];
    
// arr = answer.split(',');
// console.log(arr);

// let arr = ['qwerty', 'qwerty2', 'qweq'],
//     i = arr.join(', ');
    
//     console.log(arr);
//     console.log(i);

let arr = ['owerty', 'mwerty2', 'wweq'],
    i = arr.sort();

console.log(arr);

let array = [1, 15, 4],
    a = array.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}

console.log(array);