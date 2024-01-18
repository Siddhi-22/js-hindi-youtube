/* const user = {
    name: "Bro",
    price: 399,

    welcome: function(){
        console.log(`${this.name}, Welcome to website`);
        console.log(this);
    }
}

//console.log(this); //{} in node this shows an empty object. in browser this is shows the context of the window.
user.name = "Reema";
user.welcome();

*/



function iky(){
    const name = "CHYUi"
    console.log(this); // undefined (this) cannot be used inside a function(INside object its fine)
}

//iky();

//Also doesn't work in this types of function declaration.

const fun = function(){
    const name = "CHYUi"
    console.log(this);
}
//fun();

const eww = () => {
    const name = "Chiyo"
    console.log(this);
}

//--------------------------------------------------------

/* // Explicit return
const sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(4,5));

// Implicit Return- here no need to write return keyword.
const sub = (num1, num2) => (num1 - num2);
console.log(sub(9,3));

// when we want to return an object
const subject = (num1, num2) => ({user: "Goli"});
console.log(subject());
 */

/* const myArr = [2, 3, 4, ,5, 6];

myArr.forEach(() => {

}) */