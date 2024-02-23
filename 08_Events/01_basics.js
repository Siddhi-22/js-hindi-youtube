// document.getElementById('heart').addEventListener('click', function(e){
//     alert('Heart clicked..');
//     console.log(e);
// }, false);

//Event Bubbling(false)
// bottom-up event propagation

document.getElementById('images').addEventListener('click', function(e){
    console.log("Clicked inside ul");
}, false);



//Event Capturing(true)
//top-down event propagation

document.getElementById('mirror').addEventListener('click', function(e){
    console.log("Mirror Clicked..");
    e.stopPropagation(); //this will prevent propagation to higher elements.
}, false);
