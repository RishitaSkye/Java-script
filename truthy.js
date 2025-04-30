const userEmail="r@rishita.ai"
if(userEmail){
    console.log("got email");
    
}else{
    console.log("dont have email");
}
// falsy value
// false, 0,-0 ,BigInt On, "", null, undefined,NaN
// truthy values
//"0", 'false', " "[], {} function(){}

if (userEmail.length ===0){
    console.log("Array is empty");
    
}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
console.log("Object is empty");

}

// Nullish coalescing operator (??): null undefined

let val1;
// val1= 5 ?? 10// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 50

console.log(val1);

// Ternary Operator
// condition ? true : false

const iceTeaPrice =150
iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log("more than 80")
