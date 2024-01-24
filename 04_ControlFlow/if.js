 // if 


if (2 !== 3) {
    const power ="fly";
    console.log(`User has the power to ${power}`);
}else{
    console.log(`that was not true....`)
};

// <, >, <=, >=, ==, !=, ===, !==, 

const score = 90;

if(score > 70){
    console.log(`You Passed...`);

    var fine = 299;
    console.log(fine); 
}
// console.log(`Fine is ${fine}`); // printed due to scope violation.


// Implicit scope
const val = 550;

// if (val === 550) console.log(`Value is: ${val}`),
// console.log(`Welcome back.....`);
// very irreadable..

if (val < 100) {
    console.log("No value");
}else if(val > 300){
    console.log("Works here..");
}else{
    console.log(`No sense..`);
}
 

const googleLog = true;
const gptLog = false;
const microLog = false;

/* if (googleLog && gptLog && 2==="2") {
    console.log("Let user Login..");
}else{
    console.log(`Please try again by Google or Chatgpt..`);
}
 */

if (gptLog || microLog || true) {
    console.log("Let user login");
}

// for  && = all the conditions must be correct.
// for or(||) = anyone condition must be true.
// &&, || are logical Operator