const meraObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by Apple"
};

for (const key in meraObj) {
    // console.log(key);
    // console.log(meraObj[key]);
    // console.log(`${key} stands for ${meraObj[key]}`);
};



const programming = ["C", "C++", "Java", "JavaScript", "React", "Python"];

for (const key in programming) {
//    console.log(key); // 0 1 2 3 4 5 (that is array's keys)
   console.log(programming[key]); // C, C++ ...
};



const map1  = new Map();
map1.set('01', "Osama");
map1.set('02', "Obama");
map1.set('03', "Okana");

for (const key in map1) {
    //console.log(map1[key]); // No output coz Maps(here the initialization is of singleton type so).
    //console.log(key);
} 
//Maps are not itterable so for-in won't work.