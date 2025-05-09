// for of

/*
The for...of loop iterates over iterable objects like arrays, strings, and maps.
*/

// ["", "", ""]

// [{}, {}, {}]

const doc = [1, 2, 3, 4, 5];
for (const i of doc) {
    // console.log(i);
};
 const taaruf = "Jain Ganga";

 for (const tar of taaruf) {
    if (tar == " ") {
        continue;
    }
    //console.log(tar);
 }


 //Maps
 // all the values are unique no duplicate value added

 const map = new Map();
 map.set('IN', "INDIA");
 map.set('US', "USA");
 map.set('Fr', "France");
 map.set('IN', "INDIA");

//  console.log(map);

 for (const [key, value] of map) {
    // console.log(key, ':-', value);
 }


 
//  const myObj = new Object();
//  myObj.id = "001";
//  myObj.game = "COC";


//   for (const key of myObj) {
//     console.log(key);
// } 
 
 
 
//Maps, Arrays, Strings are itterable through for-of.
//Objects are not itterable through for-of.