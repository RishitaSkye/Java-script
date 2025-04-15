// array

const myArr=[2,3,9,6, true]
const myArr2= new Array(1,2,3,4)
console.log(myArr2[3]);

//.................. Array methods.............................
myArr.push(69)   //to add value in an array
myArr.push(9)
console.log(myArr);

console.log();

myArr.pop()  //to remove last inserted value
console.log(myArr);

console.log();

myArr.unshift(9);
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
console.log(myArr);

const newArr=myArr.join()
console.log(newArr);
console.log(typeof newArr);  //  to know the type of array


//slice, splice

console.log("A ", myArr);
const myn1= myArr.slice(1,3)  //first index(1st podsition) & 2nd index
console.log(myn1);

console.log("B ", myArr);
const myn2= myArr.splice(2,3) //2nd position & 3rd index
console.log(myn2);

console.log("C ", myArr)
console.log(myn2);


