// callback practices
// Exercise 1 — Basic Callback Execution

function processingRequest(callback){
    console.log("Processing Request ..............");
}

processingRequest(() =>{
    console.log('Request Completed !!!!')
});
processingRequest();

// Exercise 2 — Delayed Execution With setTimeout

function waitAndRun(callback){
    setTimeout(() =>{
        callback();
    }, 2000);
}
waitAndRun(() => {
    console.log('Done waiting !!')
});

// Exercise 3 — Callback With Data
function getUser(callback){
    setTimeout(() => {
        let UserObject = {id: 1, name: 'Sadiq'}
        callback(UserObject);
    }, 1000);
}
getUser((data) =>{
    console.log(data);
});

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

// ASYNC / AWAIT PRACTICE PROBLEMS

// await a Promise 
async function chores(){
    let chore = await new Promise(resolve => {
       setTimeout(() => resolve('Done'), 2000);
    });
    console.log(chore);
}
chores();

// Fetch API Data With async/await
async function getUser() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    console.log(data);   
} 
// async/await With Error Handling
async function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    try{
        const response = await fetch (url);
        if (! response.ok){
            throw new Error (`Response Status: ${response.status}`);
        }
        const result  = await response.json();
        console.log(result);
    }
    catch(error){
        console.error('Something went wrong:', error.message);
    }
}
loadData();

//Run Async Tasks in Order
async function steps() {
    let step1 = await new Promise (resolve =>{
        setTimeout(() => resolve('step 1 done'), 1000);
    });
    let step2 = await new Promise (resolve =>{
        setTimeout(() => resolve('step 2 done'), 1500);
    });
    let step3 = await new Promise (resolve =>{
        setTimeout(() => resolve('step 3 done'), 1000);
    });

    console.log(step1);
    console.log(step2);
    console.log(step3);
}
steps();

//Combine Two API Calls Using async/await
