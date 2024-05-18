// const PromiseOne = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log("Async 1 task completed");
//         resolve();
//     }, 1000);
// })

// PromiseOne.then(() => {
//     console.log("PromiseOne is Resolved");
// });



// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async 2 task comleted ");
//         resolve({name: "Phool", gaon: "SurajMukhi"});
//     },2000);
// }).then((dost) => {
//     console.log(dost);
//     return dost;
// }).then((user) => {
//     console.log(user.name);
// });



// const PromiseThree = new Promise((resolve, reject)=>{
//     setTimeout(() => {

//         const value = false;
//         if(value){
//             console.log("Async task 3 completed");
//             resolve();
//         }else{
//             console.log("Error: Somthing went Wrong");
//             reject();
//         }
//     })
// })

// PromiseThree.then(() => {
//     console.log("Promise 3 resolved..");
// }).catch(() => {
//     console.log("Promise 3 rejected");
// }).finally(() => {
//     console.log("Promise resolved or rejected");
// });




const PromiseFour = new Promise((resolve, reject) => {
    const value = true;
           setTimeout(() =>{
                if(value){
                    resolve({name: "Sakshi", email:"sak@ss@vmail.vom"});
                }else{
                    reject('Error: Somthing went Wrong');
                }
            }, 2000);
})


async function solvePromise(){

    try {
        const value = await PromiseFour;
        console.log(value);
    } catch (error) {
        console.log(error);
    }
   
}

//solvePromise();


// async function getUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
//     const data = await response.json();
//     console.log(data);
// };

// getUsers();/


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => console.log(err));