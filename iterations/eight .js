const array1 =[1,2,3,4];

// 0+1+2+3+4
const initialvalue= 0;
const sumwithinitial= array1.reduce(
    (accumulator, currentvalue) => accumulator+currentvalue,
);
console.log(sumwithinitial);
// Expected output:10
