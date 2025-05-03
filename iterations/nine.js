const myNums=[1,,2,3]

// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc+currVal
// },3)
const myTotal= myNums.reduce((acc, curr)=>acc+curr,0)
console.log(myTotal);


const shoppingCart=[
    {
        itemname:"js course",
        price:3999
    },
    {
        itemname:"python course",
        price:4999
    },
    {
        itemname:"mobile dev course",
        price:5999
    },
    {
        itemname:"DSA course",
        price:6999
    },
    {
        itemname:"cpp course",
        price:9000
    }
]

const priceTopay=shoppingCart.reduce((acc, item)=> acc+ item.price,0)

console.log(priceTopay);
