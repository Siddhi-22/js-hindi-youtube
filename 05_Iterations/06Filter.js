const programming = ["C", "C++", "Java", "JavaScript", "React", "Python"];

/* 
// forEach loop does not return anything.
const newVal = programming.forEach( (item) => {
    //console.log(item);
    return item;
});
console.log(newVal);

*/


const ank = [1,2,3,4,5,6,7,8,9];

// const choteAnk = ank.filter( (num) => {
//     return num > 4;
// });
// console.log(choteAnk);



/* 
// using forEach
const anks = [];

ank.forEach((num) => {
    if (num > 4) {
        anks.push(num);
    }
});

console.log(anks);
 */


const kitaabe = [
    {bname: "book1", genre: "History", publish: "1990"},
    {bname: "book2", genre: "Fiction", publish: "1890"},
    {bname: "book3", genre: "History", publish: "1923"},
    {bname: "book4", genre: "Horror", publish: "2001"},
    {bname: "book5", genre: "Sci-fi", publish: "2003"},
    {bname: "book6", genre: "Fiction", publish: "1995"}
];

let newBooks = kitaabe.filter((book) => {
    return book.genre === "History";
});

//console.log(newBooks);

newBooks = kitaabe.filter((book) => {
    return book.publish >= "2000";
});
console.log(newBooks);