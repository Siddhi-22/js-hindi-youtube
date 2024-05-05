const element = document.getElementById('title');
//element.style.backgroundColor = 'green';
//console.log(element);

const changed = document.getElementsByClassName('heading');
//changed.style.backgroundColor = 'yellow'; // doesn't work becoz it returns a HTMLCollection, which doesnot have style.
//console.log(changed);

const change = document.getElementById('title').getAttribute('class');
//console.log(change);

const changes = document.getElementsById('title').setAttribute('class', 'test');
console.log(changes);


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


*/