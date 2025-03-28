//Function Scope 
//----------------------------------------------

//Functions create local scope (variables inside are not accessible outside)
function test() {
    let x = 10;
}
// console.log(x); // ❌ Error (x is not defined)



//Closures
//----------------------------------------------

//A closure remembers the variables from its parent scope.
function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        return `Outer: ${outerValue}, Inner: ${innerValue}`;
    };
}
// const myClosure = outerFunction("Hello");
// console.log(myClosure("World")); // "Outer: Hello, Inner: World"

//✅ Closures are powerful for data hiding and encapsulation




// let ,var, const
var c =500;

if(true){
    let a = 10;//(not accessible outside the scope)
    const  b = 20;//(not accessible outside the scope)
    var c = 30; // Scopes are violated (accessible outside the scope) So var are avoided.
    c = 40; //40
};
// console.log(a); //not defined
// console.log(b); //not defined
//console.log(c); // 30 (accessible So not used)


function one(){
    const user = "Xiao Chi";

    function two(){
        const website = "Youtube";
        console.log(user);
    }

    //console.log(website); //error = website not defined.(out of scope).

    two();
}

//one();

if (true) {
    const username = "Chandini ";

    if (username === "Chandini ") {
        const web = " Youtube";
        //console.log(username + web);
    };
    //console.log(web); (out of scope) error = web not defined.
}
//console.log(username);(out of scope) error = username not defined.




//---------------------------------IMP------------------------------------


// addOne(); // here no problem

function addOne(num){
    return num + 1;
}

//addTwo(); //error - cannot use before declare as the function is stored in a variable itself.(Hoisting)

const addTwo = function(num){
    return num + 2;
}

// console.log(addTwo(5));

// Closure:

function out(outerVariable) {
    return function inn(innerVariable) {
        console.log('Outer Variable:', outerVariable);
        console.log('Inner Variable:', innerVariable);
    };
}

// const newFunction = out('outside');
// newFunction('inside');

// const inn = out('outside');
// inn('andarr');

function many() {
    let username1 = "Siddhi";
    console.log(this.username1); 
    console.log(this);
    

    
}
// many();

// Difference between function and arrow function:
//------------------------------------------------------------------------------

// 1. Arrow functions do not have their own this context. They inherit this from the parent scope(lexical scope).
// 2. Arrow functions cannot be used as constructors (no new keyword).
// 3. Arrow functions do not have arguments object, so you cannot use arguments inside them, but they can access arguments from the outer function.
// 4. Arrow functions cannot be used as methods in objects (they don't have their own this).
// 5. Arrow functions are always anonymous (no name).
// 6. Arrow functions do not have prototype property.
// 7. Arrow functions are not hoisted (cannot be called before declaration).
// 8. Arrow functions are always expressions (cannot be declared as statements).
// 9. Arrow functions are always in strict mode (no global context).
// 10. Arrow functions are not suitable for methods that require their own this context and object argument.
// 11. Arrow functions support implicit return (if only one expression is in the function body).


function abc(){
    let a = 12;
    console.log(this.a); //undefined
    console.log(this); //scope of the function (global scope)
        
}
// abc();

const fun = function(){
    let a = 12;
    console.log(this.a); //undefined
    console.log(this); // scope of the function (global scope)
        
}
// fun(); 

const pun = () => {
    let a = 12;
    console.log(this.a);//undefined
    console.log(this); //{}
}

pun();


const obj = {
    value: 10,
    arrowFn: () => console.log(this.value), // Inherits `this` from the outer scope (not obj)
    regularFn: function () { console.log(this.value); } // `this` refers to `obj`
  };
  
//   obj.arrowFn();  // Undefined (or `window.value` in non-strict mode)
//   obj.regularFn(); // 10
  



//   function regularFn() {
//     console.log(arguments); // Works
//   }
//   regularFn(1, 2, 3);
  
//   const arrowFn = () => {
//     console.log(arguments); // Error: arguments is not defined
//   };
//   arrowFn(1, 2, 3);
  



// function Person(name) {
//     this.name = name;
//   }
//   const person1 = new Person("John"); // Works
  
//   const ArrowPerson = (name) => {
//     this.name = name;
//   };
//   const person2 = new ArrowPerson("Jane"); // Error: ArrowPerson is not a constructor
  


  const square = x => x * x; // Implicit return
  function squareRegular(x) {
    return x * x; // Explicit return
  }
//    console.log(square(2));
//    console.log(squareRegular(2));
   



// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   console.log(this); // `this` refers to the button element
// });

// button.addEventListener("click", () => {
//   console.log(this); // `this` refers to the outer scope (not the button)
// });
