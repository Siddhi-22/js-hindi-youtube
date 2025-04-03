//The map() method creates a new array by applying a function to each element
//🔹 Use Case: When you need a transformed version of the array


const num = [1,2,3,4,5,6,7,8,9];

const zyaada = num.map((num) => {
    return num + 10;
});

//console.log(zyaada);

 
// using forEach

const newNums = [];
num.forEach((numero) => {
    newNums.push(numero + 10);
});

console.log(newNums); 


// Chaining in map

const value = num.map((num) => {
                return num * 10;
            }).map((num1) => {
                return num1 + 1;
            });

//console.log(value);                

// OR OR OR

const val = num.map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num) => num > 30);

//console.log(val);