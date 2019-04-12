'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

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
    saving: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50 && b.length < 50) {
            console.log('Its OK');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    };
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i<3; i++){
        let a = prompt("Статья необязательных расходов?");

        if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
            console.log('Its OK');
            appData.optionalExpenses[i] = a;
        }
    }
}
chooseOptExpenses();
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

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Minimum');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Medium');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Maximum')
    } else {
        console.log('Err')
    }
}
detectLevel();

function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений?"),
            procent = +prompt("Под какой процент?");
        appData.mounthIncome = save/100/12*procent;
        alert("Доход в месяц с вашего депозита: " + appData.mounthIncome);
    }
}

checkSavings();