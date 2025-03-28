/*
In JavaScript, objects are one of the most important and widely used data structures. They allow us to store and organize data in key-value pairs.

✅ Objects are unordered collections
✅ Keys are always strings (or Symbols)
✅ Values can be any data type (string, number, array, function, etc.)

 Object Constructors - singleton(no multiple instance of objects)
 Object Literals - here multiple instance can be created.

*/

// Creating Objects
//----------------------------------------------

//By Object Literals
let carq = {
    brand: "Tesla",
    model: "Model S",
    year: 2024
};

//Using the new Object() Constructor(singleton)
let carz = new Object();
carz.brand = "Tesla";
carz.model = "Model S";
carz.year = 2024;

//Using Object.create()
let prototypeObj = { type: "Vehicle" };
let car = Object.create(prototypeObj);
car.brand = "Tesla";
console.log(car.type); // "Vehicle"


// Accessing Object Properties
//----------------------------------------------
// Dot Notation & Bracket Notation

let person = { name: "Alice", age: 25 };

// console.log(person.name); // "Alice"
// console.log(person["age"]); // 25

// let key = "name";
// console.log(person[key]); // "Alice"

// // ⚠️ Use bracket notation if the property name is dynamic or contains spaces.
// let obj = { "first name": "Bob" };
// console.log(obj["first name"]); // "Bob"


// //Modifying Objects
// //----------------------------------------------

// //Adding New Properties
// let user = { name: "John" };
// user.age = 30;
// console.log(user); // { name: "John", age: 30 }


// // Modifying Existing Properties
// user.age = 31;
// console.log(user); // { name: "John", age: 31 }

// //Deleting Properties
// delete user.age;
// console.log(user); // { name: "John" }




const mySym = Symbol("key1");

const user1 = {
    name: "Julie",
    "fullName": "Julie Desouza",
    [mySym]: "mykey1", //to define symbol use[]; Symbols are used mainly in js 
                       // object to create unique immutable identifires.
                       // To prevent property name conflicts and to make object iterable.  
    age: 20,
    location: "India",
    email: "user1@gmail.com",
    isLoggedin: false,
    lastLoggedDay: ["Mon", "Fri"]
}

// console.log(user1.age);
// console.log(user1['age']); // also used to access the object properties
// console.log(user1.fullName);

/* 
//Object.freeze(user1); //omits the changes in objects.
user1.name = "Ram"; //value will be overriden.
console.log(user1);

user1.greeting = function(){
    console.log("Hello JS_User");
}
user1.greeting1 = function(){
    console.log(`Hello JS_User ${this.fullName}`);
}
console.log(user1.greeting());
console.log(user1.greeting1());

 */

//Checking for Properties
//----------------------------------------------

//in Operator / hasOwnProperty() Method
let user = { name: "Alice", age: 25 };

// console.log("name" in user); // true
// console.log(user.hasOwnProperty("age")); // true
// console.log(user.hasOwnProperty("gender")); // false


//By Constructor
const minderUser = new Object(); //Singleton 
minderUser.id = "123abc";
minderUser.name = "Abdullah";
minderUser.isLoggedIn = true;

// console.log(minderUser); 

const regUser = {
    email: "ussi@gmail.com",
    name: 
    {fullname: {
        firstname: "Akbar",
        lastname: "Birbal"
    }} 
}
// console.log(regUser.name.fullname);


//Merge Objects

const obj1 = { 1: "a", 2: "b"};
const obj2 = { 3: "b", 4: "d"};

//const obj3 = {obj1, obj2}; //takes object as single elements. 
// const obj3 = Object.assign({},obj1, obj2);

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users =[
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "x@gmail.com"
    },
    {
        id: 3,
        email: "d@gmail.com"
    }
];

// console.log(users[1].email); //x@gmail.com
// console.log(Object.keys(minderUser)); //all the keys are storeed in an array.
// console.log(Object.entries(minderUser)); // returns all the key-value pairs.
// console.log(minderUser.hasOwnProperty("name"));


//Object Methods (Functions Inside Objects)
//----------------------------------------------

//An object method is a function stored as a property.
let persona = {
    name: "Alice",
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};
// console.log(persona.greet()); // "Hello, my name is Alice"


//Object Shorthand Syntax
//----------------------------------------------

//Property Shorthand
let name = "Bob";
let age = 28;

let user01 = { name, age };
console.log(user01); // { name: "Bob", age: 28 }


//Method Shorthand
let user02 = {
    name: "Charlie",
    greet() { return `Hi, I'm ${this.name}`; }
};
console.log(user02.greet()); // "Hi, I'm Charlie"
