/*
An array in JavaScript is a special type of object that allows you to store multiple values in a single variable.

✅Arrays are ordered collections
✅ Can store any data type (numbers, strings, objects, functions, etc.)
✅ Can have mixed data types

// any copy operations in array creates shallow copy(Heap(Reference)).
// Deep copy(Stack(Value))
*/


//✅Creating Arrays
//---------------------------------
const arr = [1,2,4,5];
const Hero = new Array('Superman', 'Thorfinn', 'Naruto', 'Shaktiman', 'Batman');
const numberz = [0, 1, 2, 3, 4, 5, 6];


//⚠️ If you pass a single number, it creates an empty array with that length
// let emptyArray = new Array(5);
// console.log(emptyArray); // Output: [ <5 empty slots> ]


//✅Accessing & Modifying Arrays
//---------------------------------
// let cars = ["Tesla", "BMW", "Audi"];
// console.log(cars[0]); // Tesla
// console.log(cars[1]); // BMW


// cars[1] = "Mercedes";
// console.log(cars); // ["Tesla", "Mercedes", "Audi"]


//properties
//console.log(numberz.length);

//✅Add & Remove Methods
//---------------------------------

// arr.push(6); //element added at end
// arr.pop(); //last element deleted
//arr.unshift(-1); // element added at begining of array
//arr.shift(); //first element removed

//console.log(arr);

//✅Splicing & Slicing
//---------------------------------


// let arr = ["a", "b", "c", "d"];
// arr.splice(1, 2, "x", "y"); //Modifies the original array
// console.log(arr); // ["a", "x", "y", "d"]


const val = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(val.splice(-3,2)); // if [-array.length <= start < 0], [start + array.length] is used.
// console.log(val.splice(-9, 3)); //If [start < -(array.length)] then 0 is used as starting point and delete until given deleteCount.
// console.log(val.splice(4, 3, 'jan', 'sep', 'oct', 'nov', 'dec')); // If [start >= array.length] then given items will be added from start point(deletion performed on(3 elements from 4 index)).
// val.splice(); 

//console.log(val.splice(2, )); //if deleteCount omitted, then after start all elements are deleted
// console.log(val.splice(4, 0, 'Jan')); //If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).
// console.log(val); 



// let arr2 = ["a", "b", "c", "d"];
// console.log(arr2.slice(1, 3)); // ["b", "c"] extracts a section of the array and returns a new array


//✅Searching in Arrays
//---------------------------------

let nums = [10, 20, 30, 40, 50, 20];

// console.log(nums.indexOf(20)); // 1
// console.log(nums.lastIndexOf(20)); // 5
// console.log(nums.includes(30)); // true

// let found = nums.find(num => num > 25);
// console.log(found); // 30

// let index = nums.findIndex(num => num > 25);
// console.log(index); // 2




//✅Sorting & Reversing
//---------------------------------

// let letters = ["d", "a", "c", "b"];
// letters.sort();
// console.log(letters); // ["a", "b", "c", "d"]

// let numbers = [5, 100, 1, 30];
// numbers.sort((a, b) => a - b); // Ascending order
// console.log(numbers); // [1, 5, 30, 100]



// letters.reverse();
// console.log(letters); // ["d", "c", "b", "a"]


//✅Joining & Splitting
//---------------------------------

let words = ["Hello", "World"];
// console.log(words.join(" ")); // "Hello World"

// let sentence = "Apple, Banana, Cherry";
// console.log(sentence.split(", ")); // ["Apple", "Banana", "Cherry"] string to array. 


//  const newarr = Hero.join(); // adds array elements to string.

// console.log(typeof newarr); // String
// console.log(newarr);
// console.log(Hero); 


//✅Iterating Over Arrays
//---------------------------------

let fruits = ["Apple", "Banana", "Cherry"];
// fruits.forEach(fruit => console.log(fruit));


// let numbers = [1, 2, 3];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6]


// let numss = [10, 20, 30, 40];
// let bigNumbers = numss.filter(num => num > 20);
// console.log(bigNumbers); // [30, 40]


// let sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
// console.log(sum); // 10


//✅Other Useful Array Methods
//------------------------------------------


// console.log([1, 2].concat([3, 4])); // [1, 2, 3, 4] Merges two arrays

// console.log([1, 2, 3].every(num => num > 0)); // true ;Checks if all elements pass a test
// console.log([1, -2, 3].some(num => num < 0)); // true ;Checks if at least one element passes a test

// console.log(new Array(5).fill(0)); // [0, 0, 0, 0, 0] Fills array with value

// console.log([1, [2, [3, 4]]].flat(2)); // [1, 2, 3, 4] Flattens nested arrays



const marvelHero = ["Spiderman", "Ironman", "Thor", "Strange"];
const dcHero = ["superman", "batman", "flash"]; 

// marvelHero.push(dcHero); //takes the dcHero(array) as one single element.(Changes the existing array )
// console.log(marvelHero);
// console.log(marvelHero[4][1]);

// const allHero = marvelHero.concat(dcHero); //merges two arrays & gives a new array
// console.log(allHero);

// const allHero1 = [...marvelHero, ...dcHero]; //Spread operator breaks the array elements into pieces.
// console.log(allHero1);

// const numberzz = [1,2,3, [4,5], [6,7,[8,9],0]]
// const realnums = numberzz.flat(Infinity);
// console.log(realnums);


//✅Checking if a Variable is an Array
//------------------------------------------

// console.log(Array.isArray([1, 2, 3])); // true
// console.log(Array.isArray("Hello")); // false


// console.log(Array.isArray("John Doe")); // if given is array or not
// console.log(Array.from("John Doe")); //coverts to array
// console.log(Array.from({name: "Doe"})); // here gives [] empty array coz not specified over what the array is to be created(key, value).


// const val1 = 100;
// const val2 = 500;
// const val3 = 900;
// console.log(Array.of(val1,val2, val3)); //this can also be used to cover to array 


//✅interview
//------------------------------------------

// let arr1 = "John";
// let arr2 = "Smith";
// let len = Math.max(arr1.length, arr2.length);
// let merged;
// for(let i = 0; i < len; i++){
//     if(i < arr1.length) merged += arr1[i];;
//     if(i < arr2.length) merged +=arr2[i];
//     // return 1;
// }
// console.log(merged);



//SORT ARRAY

//using selection sort
// let a = [2, 30, 34, 11, 12];

// for(let i = 0; i< a.length -1; i++){
//     let min = i;
    
//     for(j = i+1; j <a.length; j++){
//         if(a[j] < a[min]){
//             min = j;
//         }
//     }
//     [a[i], a[min]] = [a[min], a[i]];
   
// }

// console.log(a);


//using bubble sort

// let a = [12, 34, 22, 10, 1];

// for(let i = 0; i<a.length; i++){
//     for(j = 0; j< a.length -1 -i; j++){
//         if(a[j]> a[j+1]){
//             [a[j], a[j+1]] = [a[j+1], a[j]];
//         }
//     }
// }
// console.log(a);




//using insertion sort
 