/*const todoList = [];

function addtodo() {
    const nameInput = document.querySelector('.name-input');
    const name = nameInput.value;
    todoList.push(name);
    console.log(todoList);
    nameInput.value = '';
}*/

// Destructuring assignment
//const person = {name: 'Hamdan', age: 16, profession: 'student'};
//const {name, age, profession} = person;
//console.log(person);

// Array modification
/*const numbers = [1, 2, 3, 4, 5];
numbers.shift(1);
numbers.push(6);
console.log(numbers);

// even numbers checker
function FilterEvenNumbers(){
    const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = [];
    for (let i =0; i < arrayNumbers.length; i++)
        if (arrayNumbers[i] % 2 === 0){
            evenNumbers.push(arrayNumbers[i]);
            console.log(evenNumbers);
        }
}
FilterEvenNumbers();*/

// Managing Inventory Items
/*const Inventory = [{id: 1, names: 'apple', price: '£10'}, {id: 2, names: 'banana', price: '£5'}, {id: 3, names: 'pear', price: '£9'}
];
Inventory[1].price = '£15';
console.log(Inventory[1]);*/

// Processing API-Like User Data
/*const users = [
  { id: 112, userName: "Abusadiq Hamdan", email: "example@gmail.com" },
  { id: 111, userName: "Abusadiq Iman", email: "imanpumaya@gmail.com" },
  { id: 113, userName: "Abusadiq Abunawas", email: "exampleya@gmail.com" },
];
const Allusers = [];
for (i = 0; i < users.length; i++){ 
  let numUsers = users[i].userName;
  Allusers.push(numUsers);
  console.log(Allusers);
}*/

//Filtering Inactive Accounts

/*const accounts = [
    {name: 'Abusadiq Hamdan', isActive: true,}, 
    {name: 'Abusadiq Iman', isActive: false,}, 
    {name: 'Abusadiq Abunawas', isActive: true,}
]
for(i  = 0; i < accounts.length; i++){
       const CurrentAccounts = accounts[i];
       if(CurrentAccounts.isActive ===true){
           console.log(CurrentAccounts.name);
       }
    }*/

/* Customer Search Feature

const transactions = [55.47, 48.0, 70, 190, 24.38];
let totalTransactions = 0;
for(i = 0; i < transactions.length; i++){
    totalTransactions += transactions[i];
    console.log(totalTransactions);
}*/

// Customer Search Feature

const consumers = [{id: 'GHT2582', name: 'Abunawas', phone: '0551165462'}, {id: 'GHT3257', name: 'Yakubu', phone: '0533829134'}];
function consumerMatching(name){
    console.log(`Welcome to our consumer service ${name}`);
}
consumerMatching('Abunawas');