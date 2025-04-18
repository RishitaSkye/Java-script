// Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named IIFE
console.log("DB CONNECTED");

})();   // ; in important here

//simpleIIFE
( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})('rishita')