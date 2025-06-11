//The reduce() method reduces an array to a single value.
//🔹 Use Case: When you need to accumulate values (e.g., summing elements).


const myNum = [1,2,3];

// const total = myNum.reduce((acc, curr) => {
//     console.log(`acc:${acc} and curr:${curr}`);
//     return acc + curr;
// }, 0);

//console.log(total);

//similarly

const myTotal = myNum.reduce((acc, curr) => (acc+curr), 0);
console.log(myTotal);




//some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
//🔹 Use Case: When you want to check if at least one element meets a condition.
// returns boolean value


let numbers = [10, 20, 30, 40];

let hasLargeNumber = numbers.some(num => num > 25);

console.log(hasLargeNumber); // true




//every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
//🔹 Use Case: When you want to check if all elements meet a condition.

let number1s = [10, 20, 30, 40];

let allAboveFive = number1s.every(num => num > 5);

console.log(allAboveFive); // true




//entries()
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
//🔹 Use Case: When you need both the index and the value of each element in the array.

let fruits = ["Apple", "Banana", "Mango"];

for (let [index, fruit] of fruits.entries()) {
    console.log(index, fruit);
}
