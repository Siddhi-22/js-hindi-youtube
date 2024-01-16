const course = {
    name: "JavaScript",
    price: 999,
    instructor: "Hitesh"
};

const {instructor: ins, name: n} = course; // Object Destructuring

console.log(ins);
console.log(n);


// JSON - similar to js object syntax

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