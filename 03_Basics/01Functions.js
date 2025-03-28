/*
A function is a block of code designed to perform a specific task.
Functions can take inputs (parameters) and return outputs (values).



*/

//Creating Functions
//----------------------------------------------

//By Function Declaration(Named Function)
function add(a, b) {
    return a + b;
}
console.log(add(3, 5)); // 8

//✅ Hoisted (Can be called before definition)
//✅ Good for readability and debugging



//By Function Expression(Anonymous Function)
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(3, 5)); // 15

//✅ Not hoisted (Cannot be called before definition)
//✅ Useful for assigning functions to variables



//Arrow Functions(ES6)
//----------------------------------------------
const subtract = (a, b) => a - b;
console.log(subtract(10, 3)); // 7

//✅ Shorter syntax
//✅ Implicit return (No need for {} and return if one expression)



//Parameters and Arguments
//----------------------------------------------

//Default Parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // "Hello, Guest!"


function sumOf2(number1, number2){
    console.log(number1 + number2);
}

// sumOf2; //reference 
// sumOf2(8,9); // execution
// sumOf2(5, "e"); //5e
// sumOf2(3, null); // 3

// const result = sumOf2(4,3);
// console.log(result); // undefined - coz here function does not return anything


function sub(num1, num2){
    //result = num1 - num2;
    //return result;
    return num1 - num2;
}
const result1 = sub(4,3);
//console.log("result: ",result1); // undefined - coz here function does not return anything


//Rest Parameters (...)
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

//✅ Collects all remaining arguments into an array





/* function loginUserMsg(user){
    if (user === undefined) {
        console.log(`Please enter a name`);
        return;
    }
    return(`${user} just logged in...`);
} */

//similarly we know if(true) -> then{execute} (undefined is by-default false so "!" is used)
function loginUserMsg(user = "Dubey"){
    if (!undefined) {
        console.log(`Please enter a name`);
        return;
    }
    return(`${user} just logged in...`);
}
//console.log(loginUserMsg("Shashtri")); // Shashtri just logged in
//console.log(loginUserMsg("")); // just logged in
console.log(loginUserMsg()); // undefined just logged in

/*
for (let i = 0;  i < 5; i++) {
    for(let j = 1; j <= i + 1; j++){
        console.log("#");
    }
    console.log("*"); 
};  */