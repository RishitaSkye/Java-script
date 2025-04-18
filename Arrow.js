const user={
userName:"rishita",
price:999,

welcomemessage : function(){
    console.log(`${this.userName} , welcome to the website`);  //this. refers current context
    console.log(this)
    }

}
 user.welcomemessage()
 user.userName="Shyam"
 user.welcomemessage()

console.log(this);

// function chai(){
//     let userName="hitesh"
//     console.log(this.userName)
// }
// chai()

// const chai =function(){
//     let userName= "hitesh"
//     console.log(this.userName);
// }
const chai = () => {
    let userName= "hitesh"
    console.log(this);
}

chai()

// const addtwo =(num1,num2) => {
//     return num1+num2
// }

//const addtwo =(num1,num2) => num1+num2

//const addtwo =(num1,num2) => (num1+num2)

const addtwo =(num1,num2) => ({username: "rishita"})

console.log(addtwo(3,5));
