const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children); //HTML Collectiion
// console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    //console.log(parent.children[i].innerHTML);
    
};

//parent.children[0].style.color = 'blue';

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day');
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

console.log("Nodes: ", parent.childNodes);