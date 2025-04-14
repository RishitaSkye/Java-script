const score =200
console.log(score)

const balance =new Number(500)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber =23.25499
console.log(otherNumber.toPrecision(6));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(5));

//self
const anyNumber =59
console.log(anyNumber.toExponential(8));
console.log(anyNumber.toExponential(2));

const hundreds = 10000000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4.5,5,3,8));
console.log(Math.max(4.9,6,8,5,4));

console.log(Math.random());  //math.random always give value between 0-1
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random() * 10) + 1);

const min =10
const max=20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)