const programming = ["C", "C++", "Java", "JavaScript", "React", "Python"];


// programming.forEach( (name) => {
//     console.log(name);
// })



// function doit(item) {
//     console.log(item);
// }

// programming.forEach(doit);

const doagain = (part) => {
    //console.log(part);
};
//programming.forEach(doagain);

programming.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});

//[{}, {}, {}]

const languages = [
    {
        lanName: "JavaScript",
        write: "frontend"
    },
    {
        lanName: "Pyhton",
        write: "backend"
    },
    {
        lanName: "React",
        write: "frontend"
    }
];

languages.forEach( (item) => {
    console.log(item.lanName);
})


