// callback practices
// Exercise 1 — Basic Callback Execution

function processingRequest(callback){
    console.log("Processing Request ..............");
}

processingRequest(() =>{
    console.log('Request Completed !!!!')
});

// Exercise 2 — Delayed Execution With setTimeout

function waitAndRun(callback){
    setTimeout(() =>{
        console.log('Done Waiting');
    }, 2000);
}
waitAndRun();

// Exercise 3 — Callback With Data
function getUser(callback){
    setTimeout(() => {
        let UserObject = {id: 1, name: 'Sadiq'}
        console.log(UserObject);
    }, 1000);
}
getUser();

//PROMISE PRACTICE PROBLEMS

// Create and Resolve a Promise
let task = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('success !');
    }, 2000);
});
task.then(result => {
    console.log(result);
});

// Promise That Can Fail
let MyPromise = new Promise((resolve, reject) => {
    let isOnline = true;
    if (isOnline){
        resolve('Data Loaded');
    }else{
        reject('No Internet');
    }
});
MyPromise
.then(result => console.log(result))
.catch(error => console.log(error));