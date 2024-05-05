// const h1 = document.createElement('h1');
// console.log(h1);

// h1.id = Math.round(Math.random() * 10 + 1);
// h1.className = "heading";
// h1.setAttribute('title', 'myType'); //preffered as all the rest (like .id, .className..etc) overwrites the values but setAttribute doesn't. (Optimized)
// h1.style.backgroundColor = 'yellow';
// h1.style.padding = '10px';



// // h1.innerText = 'Hey, Learn JavaScript';

// // OR OR OR


// const text = document.createTextNode("Learn JS"); // this is prferred just due to optimization
// h1.appendChild(text);


// document.body.appendChild(h1);



const rang = ['red', 'yellow', 'orange', 'blue', 'green', 'pink'];


function createH1 (id, classes, greet) {

    for (let i = 0; i < rang.length; i++) {
        
        const div = document.createElement('div');
        div.id = id;
        div.className = classes;
        div.innerText = greet;
        div.style.backgroundColor = rang[i];
    }

    //createH1("myId", "head", "hello World");

    // const div = document.createElement('div');
    // console.log(div);

    // div.id = id;
    // div.className = classes;
    // div.style.backgroundColor = col;
    // const text = document.createTextNode(greet);
    // div.appendChild(text);


    // document.body.appendChild(div);
};

createH1("myId", "head", "Hii, how are you?")