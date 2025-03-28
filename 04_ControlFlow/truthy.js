const userMail = "s@gmail.pi";

if (userMail) {
    console.log("Have mail let go...");
}
else{
    console.log("No mail, please enter");
};

// Truthy value:
// strings, [], "0", "false", {}, function(){},

// Falsy value:
// false, 0, -0, BigInt 0n, null, undefined, NaN, ""

// any string value is considered true; this is called truthy value


// Nullish Coalescing Operator (??) : null, undefined.

let value;
value = 5 ?? 10;

let val1 = null ?? 5; //5
let val2 = undefined ?? 40; //40
let val3 = null ?? 6 ?? 5; // 6 (takes the first value it receives, here 6)
let val4 = null ?? undefined ?? 5; // 5 (takes the first value it receives, here 5)

console.log(val4);

// Terniary Operator
// condition ? true : false

const chaa = 10;

chaa < 15 ? console.log(`Itta sastaa..`) : console.log(`Paise nahi hai..`); ;