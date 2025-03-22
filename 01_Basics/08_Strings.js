let name1 = "  Chandra gupta Maurya  ";

console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.charAt(3));
console.log(name1.indexOf("Mau"));
console.log(name1.slice(0, 4));
console.log(name1.split("a", 6)); // splits the string into an array
console.log(name1.replace("gupta", "veer"));
console.log(name1.includes("cry"));
console.log(name1.startsWith("Bus"));
console.log(name1.endsWith("ya"));
console.log(name1.substring(0,4)); //same as slice
console.log(name1.substring(3, 6)); //ndr
console.log(name1.repeat(4)); // repeats the whole string 4 times
console.log(name1.replaceAll("a", "e")); 
console.log(name1.trim()); //removes the extra spaces from the start and end of the string
console.log(name1.trimLeft()); //removes the extra spaces from the start of the string


let str = "He said, \"Hello\".";
console.log(str);  // He said, "Hello".

/*
Escape sequences:

\n – New line
\t – Tab
\' – Single quote
\" – Double quote
\\ – Backslash

*/