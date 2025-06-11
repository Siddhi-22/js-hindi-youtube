// const element = document.getElementById('title');
//element.style.backgroundColor = 'green';
//console.log(element);

// const changed = document.getElementsByClassName('heading');
//changed.style.backgroundColor = 'yellow'; // doesn't work becoz it returns a HTMLCollection, which doesnot have style.
// console.log(changed);
 

// const change = document.getElementById('title').getAttribute('class');
//  console.log(change);

// const changes = document.getElementById('title').setAttribute('class', 'test heading');
// console.log(changes);
// console.log(document.getElementById("title").getAttribute('class'));

const catch1 = document.getElementsByClassName('heading');
console.log(catch1); // returns HTML Collection




//Selector Elements
//--------------------------------
//doc.getElementById('id') - returns a single element with the specified id.
//doc.getElementsByClassName('class') - returns a live HTMLCollection of elements with the specified class name.
//doc.getElementsByTagName('tag') - returns a live HTMLCollection of elements with the specified tag name.
//doc.querySelector('selector') - returns the first element that matches the specified CSS selector.
//doc.querySelectorAll('selector') - returns a static NodeList of all elements that match the specified CSS selector.


//Styling elements using JS
const newChng = document.getElementById('dosa');
newChng.style.backgroundColor = 'pink';
newChng.style.padding = '20px';
newChng.style.borderRadius = '10px';
// console.log(newChng); 


//content manipulation
const content = document.getElementById('dosa');
// console.log(content.innerHTML); // returns the HTML content of the node and its descendants.
// console.log(content.innerText); // when any css property(display) is used it won't show that content.
// console.log(content.textContent); // returns the complete text content of the node and its descendants.
// console.log(content.outerHTML); // returns the HTML content of the node itself.
// console.log(content.outerText); // same as innerText.









//NOTES

/*

NODELIST
-----------------
- NodeList is an object that represents a collection of nodes.
- returned by methods like querySelectorAll() or childNodes.
- Common methods include forEach(), item(), and length.
- You can access individual nodes in a NodeList using array syntax ([index]) or by iterating through them using loops like for or forEach.

HTML COLLECTION
-----------------------
- HTMLCollection is another type of object that represents a collection of HTML elements.
- HTMLCollection is often returned by methods such as getElementsByTagName(), getElementsByClassName(), and children property of DOM elements.
- Array like propeties so we can access thorugh ('[]') or for loop like arrays .
- Here no forEach or other loops are available for accessing elements but we make it available by convert it to array first.
-

*/