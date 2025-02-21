let score= "33abc"
//"33abc" = NaN (not a number) {conversion not possible}
//true = boolean
// 33 = number
// "33" =string
console.log(typeof score);
console.log(typeof(score));

let valueinnumber =Number(score)
console.log(typeof valueinnumber);
console.log(valueinnumber);

// "33" => 33
//"33abc" => NaN
// true => 1 ; false => 0
let isLoggedIn=""

let booleanisloggedIn = Boolean(isLoggedIn)
console.log(booleanisloggedIn);
//1=>true     0=>false
//""=>False
//"trish"=>true

let someNumber =32
let stringNumber =String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);