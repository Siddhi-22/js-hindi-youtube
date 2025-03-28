//Object Destructuring

//Extract values from an object into variables.
let persona = { name: "Eve", age: 25, city: "Paris" };

let { name, age } = persona;
console.log(name, age); // "Eve", 25

//✅ You can rename properties:
let { name: fullName } = person;
console.log(fullName); // "Eve"

//✅ Default values:
let { country = "USA" } = person;
console.log(country); // "USA"



const course = {
    name: "JavaScript",
    price: 999,
    instructor: "Hitesh"
};

const {instructor: ins, name: n} = course; // Object Destructuring

console.log(ins);
console.log(n);

//Merging & Cloning Objects
//----------------------------------------------

//Using Object.assign()
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3 };

let merged0 = Object.assign({}, obj1, obj2);
console.log(merged0); // { a: 1, b: 2, c: 3 }


//Using Spread Operator (Recommended)
let merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3 }


//Cloning Objects
let original = { x: 10, y: 20 };
let clone = { ...original };

console.log(clone); // { x: 10, y: 20 }



//Freezing & Sealing Objects
//----------------------------------------------

let obj = { name: "Mike" };
Object.freeze(obj);
obj.name = "Tom"; // ❌ No effect
delete obj.name; // ❌ No effect
console.log(obj); // { name: "Mike" }

let obj02 = { name: "Sarah" };
Object.seal(obj02);
obj02.name = "Emma"; // ✅ Allowed
delete obj02.name; // ❌ Not allowed
console.log(obj02); // { name: "Emma" }



// JSON - similar to js object syntax
//----------------------------------------------

/* {
    "name": "Kush",
    "price": "free",
    "subject": "JavaScript",
    "streams":[ "Science", "Commerce", "Arts"]
} */

// also a json.
/* [
    "id": "001",
    "members": {
        "name": "abc",
        "age": 20
    },
    {
        "name": "ebc",
        "age": 23
    },
    {
        "name": "aby",
        "age": 24
    }
] */


//Converting Object to JSON
let person0 = { name: "Alice", age: 25 };
let jsonString = JSON.stringify(person0);
console.log(jsonString); // '{"name":"Alice","age":25}'


//Converting JSON to Object
let jsonObj = JSON.parse(jsonString);
console.log(jsonObj); // { name: "Alice", age: 25 }



//Checking If a Variable is an Object
//----------------------------------------------

console.log(typeof {}); // "object"
console.log(typeof []); // "object" (Arrays are objects)
console.log(typeof null); // "object" (Special case in JS)

console.log(Object.prototype.toString.call({})); // "[object Object]"
console.log(Object.prototype.toString.call([])); // "[object Array]"



//Iterating Over Object Properties
//----------------------------------------------

//Using for...in Loop
let person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
    console.log(key, person[key]);
}


//Using Object.keys()
console.log(Object.keys(person)); // ["name", "age", "city"]


// Using Object.values()
console.log(Object.values(person)); // ["John", 30, "New York"]


//Using Object.entries()
console.log(Object.entries(person)); // [["name", "John"], ["age", 30], ["city", "New York"]]
