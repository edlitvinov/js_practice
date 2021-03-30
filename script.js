"use strict";

// let num = 70;

// while (num <= 75) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 75);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break; //останавливает цикл
        continue; // прерывает цикл в точке условия и продолжает его далее
    }
    console.log(i);
}