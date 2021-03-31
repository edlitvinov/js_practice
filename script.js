"use strict";

let num = 20;
//showFirstMessage() - Имя функции должно состоять из глагола.....
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("hello!");
console.log(num);

let a = +prompt("num_1: ", "");
let b = +prompt("num_2: ", "");
console.log(calc(3, 4));
console.log(calc(15, 16));

function calc(a, b) {
    return (a + b);
}


function ret() {
    let num = 20;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);
const logger = function() {
    console.log("hello!");
};
logger();

const calc = (a, b) => a + b;