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