
function totalCartValue(val1, val2, ...num1){ //here rest operator is used.
    return num1;
};

//console.log(totalCartValue(5, 300, 230, 320));


const user = {
    price: 300,
    name: "Sharmaji"
};

function objHandle(anyObj){
    console.log(`Username is ${anyObj.name} and price is ${anyObj.price}`);
};
console.log(objHandle(user));
objHandle({
    name: "Varma",
    price: 500
});

const MyArray = [2, 4, 6, 7, 6, 0];

function getSecondValue(arr){
    return( arr[1]); 
}
console.log(getSecondValue(MyArray));