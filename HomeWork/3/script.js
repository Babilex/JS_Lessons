'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

// console.log(money);
// console.log(time);

// console.log(costs);
// console.log(price);

var appData = 
{
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [] ,
    saving: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50 && b.length < 50) {
        console.log('Its OK');
        appData.expenses[a] = b;
    } else {

    }
};

/*
let i = 0;
while (i < 2) {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50 && b.length < 50) {
        console.log('Its OK');
        appData.expenses[a] = b;
    } else {

    }
}
*/
/*
let i = 0;
do {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50 && b.length < 50) {
        console.log('Its OK');
        appData.expenses[a] = b;
    } else {

    }
} while (i < 2);
*/

appData.moneyPerDay = appData.budget / 30;
alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Minimum');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Medium');
} else if (appData.moneyPerDay > 2000) {
    console.log('Maximum')
} else {
    console.log('Err')
}