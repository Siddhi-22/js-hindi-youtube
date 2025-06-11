const list = document.querySelector('.parent');
console.log(list);
list.style.color = 'orange';
console.log(list.children);//HTML Collection
console.log(list.childNodes); //NodeList;
console.log(list.parentElement); //returns the parent element of the selected element.



const lists = document.querySelectorAll('.parent');
console.log(lists); //NodeList
// lists.style.backgroundColor = 'yellow'; //error
lists[0].style.backgroundColor = 'yellow'; 


const liitem = document.querySelector('.day');
console.log(liitem.innerText);
liitem.style.color = 'purple';
console.log(liitem.parentElement.parentElement);


const liitems = document.querySelectorAll('.day');
console.log(liitems); //NodeList
// liitems.style.backgroundColor = 'yellow'; //error
liitems[0].style.backgroundColor = 'pink';
liitems.forEach((li) => li.style.color = "green");

 











/*

const parent = document.querySelector('.parent'); //selects the first element with class 'parent' in the document
// console.log(parent);
// console.log(parent.children); //HTML Collectiion
// console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    //console.log(parent.children[i].innerHTML);
    
};

parent.children[0].style.color = 'blue';

// console.log(parent.firstElementChild.textContent); //returns the first child element of the parent element.
// console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day');
// console.log(dayOne);
console.log(dayOne.parentNode);
// console.log(dayOne.nextElementSibling);

// console.log("Nodes: ", parent.childNodes);

//can use all the css selectors in querySelector and querySelectorAll.



const all = document.querySelectorAll('li');
// all.style.color = 'red'; //doesn't work becoz it returns a NodeList, which doesnot have style.
// console.log(all);

const list = document.querySelectorAll('li');
// list[0].style.color = 'red'; //works becoz it returns a NodeList, which does have style.

// list.forEach((ele) => ele.style = 'background-color: yellow; color: black; padding: 10px; border-radius: 5px; margin: 5px;');




const liList = document.getElementsByClassName('list-item'); // NodeList
const liArray = Array.from(liList);
console.log(liArray);

liArray.forEach((li) => li.style = 'background-color: yellow; color: blue; padding: 2px; border-radius: 5px; margin: 5px;');
liArray.map((li) => li.setAttribute('id', 'ele'));
// console.log(liArray);

 */