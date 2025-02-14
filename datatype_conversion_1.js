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