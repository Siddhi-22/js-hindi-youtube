const score = 200;
console.log(score);

const balance = new Number(240); // [Number: 240]
/* console.log(balance);
const value = 124.735;
const money = 1000000;

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(value.toPrecision(2));
console.log(money.toLocaleString('en-IN'));
 */


// Math 
//---------------------------------------------------------

/* //console.log(Math);
console.log(Math.abs(-4)); // only-ve value converted to +ve
console.log(Math.round(34.56));
console.log(Math.ceil(4.6));
console.log(Math.floor(5.3));
console.log(Math.sqrt(121)); */

console.log(Math.random()); // (0-1)
console.log(Math.floor((Math.random() * 10) + 1));//(1 - 9)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min + 1)) + min);
console.log((Math.PI).toFixed(3));