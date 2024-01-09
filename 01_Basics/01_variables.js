const accountId = 122344;
let accountEmail = "user@gmail.com";
var accountPassword = "12345";
// accountCity = "Jaipur";
let accountState;


// accountId = 1;
// accountEmail = "siddhi@gmail.com";
// accountPassword = "56789";
 accountCity = "Kathmandu";
// console.log(accountEmail);
// console.log(accountP);

//console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
 

/*
    NOTE - Prefer not t use 'var'
           because  of issues in block and function scope  
*/

// String



const GameName = new String("Veton");
const Name = new String("   Carolene");
const url = "https://google20%.com/Siffa";

console.log(`Hello ${GameName} welcome to the Game!!`);
console.log(GameName.length);
console.log(GameName.toUpperCase());
console.log(GameName.charAt(3));
console.log(GameName.indexOf('t'));
console.log(GameName.split('t'));
console.log(GameName.slice(-2, 2));
console.log(GameName.substring(1,3)); 
console.log(Name.trim()); //remover white spaces and line terminators
console.log(url.replace("20%", "@"));
console.log(url.includes("goog"));
