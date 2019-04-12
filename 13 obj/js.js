'use strict';

let options = {
    wigth: 1024,
    heigth: 1024,
    text: "text"
};

console.log(options.text);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);
console.log(' ');

for (let key in options) {
    console.log('Свойства ' + key + ' имеет значение ' + options[key]);
}
console.log('Количество свойств обьекта: ' + Object.keys(options).length);