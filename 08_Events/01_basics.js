// document.getElementById('heart').addEventListener('click', function(e){
//     alert('Heart clicked..');
//     console.log(e);
// }, false);



//Event Bubbling(false) (default)
// bottom-up event propagation

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("Clicked inside ul");
//     console.log(Date(e.timeStamp));
// }, false);



//Event Capturing(true)
//top-down event propagation

// document.getElementById('mirror').addEventListener('click', function(e){
//     console.log("Mirror Clicked..");
//     e.stopPropagation(); //this will prevent propagation to higher elements.
// }, false);


// document.querySelector('#images').addEventListener('click', (e) => {
//     console.log(e.target.parentNode);

//     if (e.target.tagName === 'IMG') {
//         let removeIt = e.target.parentNode;
//         removeIt.remove();
//         removeIt.parentNode.removeChild(removeIt);
//     }
// }, false)



document.querySelector('#images').addEventListener('click', (e) => {
  console.log("Clicked on Ul");

  
},{once:true}); // this will remove the event listener after first click
//{passive:true} // this will not allow preventDefault() to be called

// Create the custom event
const myEvent = new CustomEvent("userLoggedIn", {
  detail: { username: "Sweety",
    age: 25,
    email: "sweety.101@gmail.com"
   }
});

// Listen for it
document.addEventListener("userLoggedIn", function(e) {
  console.log("Welcome, " + e.detail.age);
});

// Dispatch the event
document.dispatchEvent(myEvent);













//NOTES
//----------- (read about this)
// type, timeStamp, preventDefault, 
// target, (toElement, srcElement (old IE)), currentTarget
//clientX, clientY, screeenX, screenY
//altkey, ctrlkey, shiftkey, (keyCode (depricated)instead e.key or e.code) 



// Option	  Description
//---------------------------------------
// once	      Fires only once
// capture	  Use capture phase
// passive	  Indicates the function won't call preventDefault()





