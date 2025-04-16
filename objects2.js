//const tinderUser= new Object()   ...........singleton object 
const tinderUser ={}    //..........non singlrton obj


tinderUser.id="123abc"
tinderUser.name= "Sammy"
tinderUser.isloggedin = false

//console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Rishi",
            lastname: "Das",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"t",4:"a"}
const obj4={5:"d",6:"c"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({}, obj1, obj2, obj4)
// {}----> is target  &   obj1, obj2, obj4----> are source

const obj3={...obj1, ...obj2}
console.log(obj3);


const users=[
    {
id:102036,
email: "rd@gmail.com",
    },
    {
    id:102336,
    email: "kd@gmail.com",
            },
            {
            id:102056,
            email: "td@gmail.com",
                    },
]

//users[102036].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedin'));

//..............object assign...............................
const target={a:1, b:9};
const source={m:8, n:4 };

const returnedTargeT = Object.assign(target,source);

console.log(target);
// expected output: Object{a:1, b:9, m:8, n:4}

// console.log(source);
// console.log(returnedTargeT=== source);
// expected output : false

console.log(returnedTargeT=== target);
// expected output : true

