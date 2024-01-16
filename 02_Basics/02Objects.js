// Object Constructors - singleton(no multiple instance of objects)
// Object Literals - here multiple instance can be created.


const mySym = Symbol("key1");

const user1 = {
    name: "Julie",
    "fullName": "Julie Desouza",
    [mySym]: "mykey1", //to define symbol use[]
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

console.log(users[1].email); //x@gmail.com
console.log(Object.keys(minderUser)); //all the keys are storeed in an array.
console.log(Object.entries(minderUser)); // returns all the key-value pairs.
console.log(minderUser.hasOwnProperty("name"));