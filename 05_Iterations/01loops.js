// for (initialization, condition, increment)

const movies = ["The Shinning", "Dabbe", "Shamen", "The Nun", "Veronica"];

for (let index = 0; index < movies.length; index++) {
    const element = movies[index];

    if (index == 3) {
        //console.log("Emily's Exorcism");
    }
    //console.log(element);
};

for (let i = 1; i <= 5; i++) {
    //console.log(i);
    for (let j = 1; j <= 10; j++) {
       // console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}

let apunKaArr = ["Ganpat", "KaliCharan", "Mogambo", "Shakaal", "Gabbar"];

for (let i = 1; i < apunKaArr.length; i++) {
    const element = apunKaArr[i];
    //console.log(element);
}

// break and continue

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(i);
}
// Here the control flow breaks after 5.


for (let i = 0; i <= 20; i++) {
    if (i == 7) {
        console.log(`Detected 7`);
        continue;
    }
    console.log(i);
}
// here the loop is skipped onece.