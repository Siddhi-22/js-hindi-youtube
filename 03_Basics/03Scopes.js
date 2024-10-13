
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

const inn = out('outside');
inn('andarr');