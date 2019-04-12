'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

// console.log(money);
// console.log(time);

let costs = prompt("Введите обязательную статью расходов в этом месяце");
let price = prompt("Во сколько обойдется?");

// console.log(costs);
// console.log(price);

var appData = 
{
    budget: money,
    timeData: time,
    expenses: {"costs" : "price"},
    optionalExpenses: {},
    income: [] ,
    saving: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = prompt("Во сколько обойдется?"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце"),
    a4 = prompt("Во сколько обойдется?");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);