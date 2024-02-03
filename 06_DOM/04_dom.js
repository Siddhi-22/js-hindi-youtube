function addLanguage(langName) {
    const li = document.createElement('li');   
    li.innerHTML = `${langName}`;

    document.querySelector('.language').appendChild(li);
};

addLanguage("Python");
addLanguage("Java");


//Optimized way
function optiAdd(lang){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(lang));
    document.querySelector('.language').appendChild(li);
};

optiAdd("Ruby");
optiAdd('goLang');


// Editing elements
const change = document.querySelector('li:nth-child(2)');
change.innerHTML = 'Mojo';


const li = document.createElement('li');
li.textContent = "Bhai Lang";
change.replaceWith(li);


const newLi = document.querySelector('li');
newLi.outerHTML = "<li>React</li>";

