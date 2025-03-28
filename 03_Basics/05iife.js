/* Immediately Invoked Function Expression (IIFE)
-Runs immediately after definition.

✅ Avoids polluting the global scope
✅ Used for module pattern and data encapsulation
*/


// Named IIFE

// (function work(){
//     console.log("Let's Work...");
// })();

// Unnamed IIFE

// ((name) => {
//     console.log(`${name}, welcome back...`);
// })("Gefrrey");



//Higher-Order Functions (Functions That Take or Return Functions)
//-----------------------------------------------------------------------

//✅ Enables functional programming patterns
//✅ Used in map, filter, reduce

function operate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
// console.log(operate(5, 3, add)); // 8



//Function Methods (call, apply, bind)
//-----------------------------------------------------------------------

//call() – Invoke a function with explicit this
function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

// const person = { name: "Alice" };
// greet.call(person); // "Hello, my name is Alice"


//apply() – Similar to call(), but takes arguments as an array
function introduce(age, city) {
    console.log(`I'm ${this.name}, ${age} years old from ${city}`);
}

// const user = { name: "Bob" };
// introduce.apply(user, [25, "NYC"]); // "I'm Bob, 25 years old from NYC"


//bind() – Returns a new function with a fixed this
// const boundGreet = greet.bind(person);
// boundGreet(); // "Hello, my name is Alice"




//Function Hoisting
//-----------------------------------------------------------------------
//Function Declarations are hoisted (can be used before defining)

//Function Expressions are NOT hoisted

// sayHello(); // Works

function sayHello() {
    console.log("Hello!");
}


// console.log(sayHi()); // ❌ Error: Cannot access 'sayHi' before initialization

const sayHi = function() {
    console.log("Hi!");
};


//Recursion (A Function Calling Itself)
//-----------------------------------------------------------------------
//Recursion is useful for solving problems like factorials, Fibonacci series, etc.
//✅ Always include a base case to avoid infinite recursion.

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
// console.log(factorial(5)); // 120



//Pure vs. Impure Functions
//-----------------------------------------------------------------------

// Pure Functions (No Side Effects)
//✅ Same output for same input
//✅ No modification of external state
function pureAdd(a, b) {
    return a + b;
}


// Impure Functions (Have Side Effects)
//❌Modifies external variables (side effects)
let count = 0;
function impureAdd(a) {
    count += a;
}


//Function Composition (Combining Functions)
//-----------------------------------------------------------------------
//✅ Encourages modular and reusable code

const double = x => x * 2;
const square = x => x * x;

const doubleThenSquare = x => square(double(x));
// console.log(doubleThenSquare(3)); // 36



//Generator Functions (function*)
//-----------------------------------------------------------------------
//Used for lazy iteration.
//✅ Efficient for handling large datasets
function* countUp() {
    let i = 1;
    while (true) {
        yield i++;
    }
}
const counter = countUp();
// console.log(counter.next().value); // 1
// console.log(counter.next().value); // 2


//Asynchronous Functions
//-----------------------------------------------------------------------

//setTimeout and setInterval
// setTimeout(() => console.log("After 2 seconds"), 2000);
// setInterval(() => console.log("Every second"), 1000);


//Promises (async/await)
//✅ Makes async code easier to read and write
function fetchData() {
    return new Promise(resolve => setTimeout(() => resolve("Data loaded"), 2000));
}

async function load() {
    let result = await fetchData();
    console.log(result);
}
// load();


 