/* const user = {
    name: "Bro",
    price: 399,

    welcome: function(){
        console.log(`${this.name}, Welcome to website`);
        console.log(this);
    }
}

//console.log(this); //{} in node this shows an empty object. in browser this is shows the context of the window.
user.name = "Reema";
user.welcome();

*/



function iky(){
    const name = "CHYUi";
    console.log(this.name); // undefined (this.name) cannot be used inside a function(INside object its fine)
    console.log(this); //returns a global object in Node.
}

// iky();

//Also doesn't work in reference function declaration.

const fun = function(){
    const name = "CHYUi"
    console.log(this.name); //undefined
    console.log(this); //returns a global object in Node.
}
// fun();

const eww = () => {
    const name = "Chiyo"
    console.log(this); // {}, coz arrow function do not have their own this binding.
    console.log(this.name); //undefined
    
}

eww();


//--------------------------------------------------------

/* // Explicit return - manually we need to write return keyword.
const sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(4,5));

// Implicit Return- here no need to write return keyword.
const sub = (num1, num2) => (num1 - num2);
console.log(sub(9,3));

// when we want to return an object
const subject = (num1, num2) => ({user: "Goli"});
console.log(subject());
 */

/* const myArr = [2, 3, 4, ,5, 6];

myArr.forEach(() => {

}) */



    // How this Works in Regular Functions:
    // In a traditional function, the value of this depends on how the function is called. For example:
    
    // In a method, this refers to the object the method is called on.
    // In a standalone function, this refers to the global object (window in browsers, global in Node.js), unless the function is called in strict mode (undefined).
    // How this Works in Arrow Functions:
    // Arrow functions do not have their own this binding. Instead, they inherit this from the surrounding lexical context (the scope in which the arrow function is defined). This is called lexical scoping.
    
    // Key Differences:
    // Lexical this: Arrow functions capture the this value from the context in which they are defined, meaning they don't get their own this.
    // No dynamic this: In arrow functions, this doesn't change based on how the function is called (as it does in regular functions). It is fixed when the function is defined.
   
    // Example:
    // Regular Function:
    
    function Person() {
        this.age = 0;
        
        setInterval(function() {
            this.age++; // `this` refers to the global object, not Person instance
            console.log(this.age); // NaN or unexpected behavior
        }, 1000);
    }
    
    // let p = new Person();
    // In the above example, this.age++ will not increment age in the Person instance because this inside the setInterval callback refers to the global object.
    
    // Arrow Function:
    
    
    function Person() {
        this.age = 0;
        
        setInterval(() => {
            this.age++; // `this` refers to the Person instance
            console.log(this.age); // Works correctly
        }, 1000);
    }
    
    // let p = new Person();
    // In this version, the arrow function inside setInterval inherits this from the Person function, so it refers to the Person instance.
    
    // Why this Might Not Return a Value in Arrow Functions:
    // No Local this: Since arrow functions don’t have their own this, if you're trying to reference this inside an arrow function expecting it to behave like a regular function, it won’t work as expected.
    
    // For example, if you try:
    
    
    const obj1 = {
        name: 'John',
        greet: () => {
            console.log(this.name);
        }
    };
    obj1.greet(); // undefined, because `this` is inherited from the surrounding scope (likely the global object)
    // In this case, this.name is undefined because the arrow function inherits this from the surrounding lexical context (which could be the global object or undefined in strict mode).
    
    // Context Mismatch: If you expect this to refer to an object within the arrow function but the function was defined in a different context, this won't behave as expected.
    
    // Solution: Use Regular Functions If You Need Dynamic this
    // If you need a dynamic this (i.e., you want this to refer to the object on which the method was called), you should use a regular function:
    
    
    const obj2 = {
        name: 'John',
        greet: function() {
            console.log(this.name); // this works
        }
    };
    obj2.greet(); // 'John'


    // In summary:
    
    // Arrow functions don’t have their own this. They inherit this from their lexical environment.
    // If you need to access the object that a method belongs to, use a regular function instead of an arrow function.