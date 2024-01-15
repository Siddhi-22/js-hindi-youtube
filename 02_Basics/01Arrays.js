
// const arr = [1,2,4,5];
// const Hero = new Array('Superman', 'Thorfinn', 'Naruto', 'Shaktiman', 'Batman');

// const numberz = [0, 1, 2, 3, 4, 5, 6];

// any copy operations in array creates shallow copy(Heap(Reference)).
// Deep copy(Stack(Value))

//properties
//console.log(numberz.length);

//Methods
// arr.push(6); //element added at end
// arr.pop(); //last element deleted
//arr.unshift(-1); // element added at begining of array
//arr.shift(); //first element removed

//console.log(arr);

// console.log(arr.includes(4)); //hai k nahi
// console.log(arr.indexOf(3));// given element hai k nhi


/* const newarr = Hero.join(); // adds array elements to string.

console.log(typeof newarr); // String
console.log(newarr);
console.log(Hero); */

// console.log("A ", Hero);

// const arr1 = Hero.slice(1, 3);
// console.log("B", Hero);
// console.log(arr1);


// const arr2 = Hero.splice(1, 3);
// console.log("B", Hero);
// console.log(arr2);

// Spilce
// (start, deleteCount, item1, item2, .... itemN)
//start - zero based index at which to start changing the array.
//deleteCount - an integer indicating the number of element in array to remove from start.

const val = [1, 2, 3, 4, 5, 6, 7, 8];
//val.splice(-9, 0); //If [start < -(array.length)] then 0 is used as starting point and delete until given deleteCount.
// console.log(val.splice(4, 3, 'jan', 'sep', 'oct', 'nov', 'dec')); // If [start >= array.length] then given items will be added from start point(deletion performed on(3 elements from 4 index)).
//val.splice(); //Here nothing is deleted.

//console.log(val.splice(2, )); //if deleteCount omitted, then after start all elements are deleted
//console.log(val.splice(0, 2, 'Jan')); // if [deleteCount > start] here start is excluded and deleteCount is included elements in-between  are deleted, and item given are added.
//console.log(val.splice(2, 2, 'Jan')); // if [deleteCount = start] then all the element including start will be deleted, and item will be pushed.

//console.log(val); 



const marvelHero = ["Spiderman", "Ironman", "Thor", "Strange"];
const dcHero = ["superman", "batman", "flash"];

// marvelHero.push(dcHero); //takes the dcHero(array) as one single element.(Changes the existing array )
// console.log(marvelHero);

// console.log(marvelHero[4][1]);

// const allHero = marvelHero.concat(dcHero); //gives a new array
// console.log(allHero);

// const allHero1 = [...marvelHero, ...dcHero]; //Spread operator breaks the array elements into pieces.
// console.log(allHero1);

// const numberzz = [1,2,3, [4,5], [6,7,[8,9],0]]
// const realnums = numberzz.flat(Infinity);
// console.log(realnums);


console.log(Array.isArray("John Doe")); // if given is array or not
console.log(Array.from("John Doe")); //coverts to array
console.log(Array.from({name: "Doe"})); // here gives [] empty array coz not specified over what the array is to be created(key, value).


const val1 = 100;
const val2 = 500;
const val3 = 900;
console.log(Array.of(val1,val2, val3)); //this can also be used to cover to array 
