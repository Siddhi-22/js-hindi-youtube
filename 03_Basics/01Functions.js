function sumOf2(number1, number2){
    console.log(number1 + number2);
}

// sumOf2; //reference 
// sumOf2(8,9); // execution
// sumOf2(5, "e"); //5e
// sumOf2(3, null); // 3

// const result = sumOf2(4,3);
// console.log(result); // undefined - coz here function does not return anything




function sub(num1, num2){
    //result = num1 - num2;
    //return result;
    return num1 - num2;
}
const result1 = sub(4,3);
//console.log("result: ",result1); // undefined - coz here function does not return anything




/* function loginUserMsg(user){
    if (user === undefined) {
        console.log(`Please enter a name`);
        return;
    }
    return(`${user} just logged in...`);
} */

//similarly we know if(true) -> then{execute} (undefined is by-default false so "!" is used)
function loginUserMsg(user = "Dubey"){
    if (!undefined) {
        console.log(`Please enter a name`);
        return;
    }
    return(`${user} just logged in...`);
}
//console.log(loginUserMsg("Shashtri")); // Shashtri just logged in
//console.log(loginUserMsg("")); // just logged in
console.log(loginUserMsg()); // undefined just logged in

/*
for (let i = 0;  i < 5; i++) {
    for(let j = 1; j <= i + 1; j++){
        console.log("#");
    }
    console.log("*"); 
};  */