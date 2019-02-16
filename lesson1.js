let lib = require('./lib');
let readline = require('readline-sync');

let B2C = readline.question("Какова стоимость подряда компании С для компании В? ");
let C2D = readline.question("Какова стоимость подряда компании D для компании C? ");
let D2B = readline.question("Какова стоимость заказов компании D для компании B? ");

//let y = process.argv;
let x = lib.profit(Number(B2C), Number(C2D), Number(D2B));

console.log(`доход компании А`, x);
// console.log(process.argv);