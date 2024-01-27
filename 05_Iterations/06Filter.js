const programming = ["C", "C++", "Java", "JavaScript", "React", "Python"];


// forEach loop does not return anything.
const newVal = programming.forEach( (item) => {
    //console.log(item);
    return item;
});
console.log(newVal);