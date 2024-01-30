const myNum = [1,2,3];

// const total = myNum.reduce((acc, curr) => {
//     console.log(`acc:${acc} and curr:${curr}`);
//     return acc + curr;
// }, 0);

//console.log(total);

//similarly

const myTotal = myNum.reduce((acc, curr) => (acc+curr), 0);
console.log(myTotal);