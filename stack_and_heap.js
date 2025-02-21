// Memory are 2 types : Stack(Primitive) and Heap(Non-Primitive)

let myYouTubename = "Rishita.com"
let anothername = myYouTubename
anothername ="Chaiaurcode"
console.log(myYouTubename);  // Rishita.com
console.log(anothername);   // Chaiaurcode

let userONE ={
    email: "user@google.com",
    upi: "user@oksbi"
}

let userTWO =userONE

userTWO.email="rishi@gmail.com"
console.log(userONE.email);
console.log(userTWO.email);