//SWITCH BASIC SYNTAX
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month=4     //"April"

switch (month) {
    case 1:     //case "Jan":
        console.log("January");       
        break;
// for duplicate ..... (shift-alt-downarrow)
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("Default case match");
        break;
}