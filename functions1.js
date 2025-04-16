
//function definition
//function--->keyword   
// myName---->functionmane
//()---->syntax

function myName(){
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("A");
}
myName()
//myName---->reference or call
//()------>execute


//To take value.........different methods.......
//function addTwonumbers(num1,num2){
//console.log(num1+num2);
//}

function addTwonumbers(num1,num2){
    //let result=num1+num2
    // return result      //............same as
    return num1+num2
}
const result=addTwonumbers(3,5)
console.log("Result:",result);

//addTwonumbers(3,"4")
//addTwonumbers(3,"a")
//addTwonumbers(3,null)  //3--->parameters, null--->arguments
function loginUserMessage(username){
     if(username===undefined){  //if true 
         console.log("Please enter a username");
         return
     }
//     function loginUserMessage(username="Rishi"){
//     if(!username){ 
//         console.log("Please enter a username");
//         return
//     }
  return '${username} just loggedin'
 }

//console.log(loginUserMessage("rishita"))
console.log(loginUserMessage()) //empty string means false value
//undefined also means false value

console.log();
console.log();  //used for gap in output
console.log();



//...======>(3 dots) called rest or spread operator
//it creates an array
function calculateCartprice(val1,val2, ...num1){
    return num1
}
console.log(calculateCartprice(200,500,600,2000));
//val1=200   val2=5000  rests(600,2000) are in array

const user={
    username:"Rishita",
    price:199
}
function handleobject(anyobject){
    console.log('Username is ${anyobject.username} and price is ${anyobject.price}');
    
}
//handleobject(user)
handleobject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
return getArray[1]
}
console.log(returnSecondValue(myNewArray));
