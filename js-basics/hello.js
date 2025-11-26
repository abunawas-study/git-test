// Arrays excerses
 
// last value modification
const num = [10, 20, 30];
num.pop();
num.push(99);
console.log(num);

// a function that takes an array and return the last value

function getLastValue(){
    const arrayValue = [1, 20, 22, 24, 5];
    const lastIndex = arrayValue.length - 1;
    const lastValue = arrayValue[lastIndex]
    console.log(lastValue);
}
getLastValue();

function getLastWord(){
    const arrayWords = ['hi', 'hello', 'good'];
    const lastWord = arrayWords.length -1;
    const LastValue = arrayWords[lastWord];
    console.log(LastValue);
}
getLastWord();

function arraySwap(){
    const arraySwapNum = [1, 20, 22, 24, 5];
    const arraySwapWord = ['hi', 'hello', 'good'];
    arraySwapNum.reverse();
    arraySwapWord.reverse();
    console.log(arraySwapNum);
    console.log(arraySwapWord);
}
arraySwap();

let count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for( i = 0; i < count.length; i+=2){
    console.log(count[i]);
}
let Count = [0, 1, 2, 3, 4, 5,]
for(i < Count.length-1; i >= 0; i--){
    //count.reverse();
    console.log(Count[i]);
}
const newArray = [1, 2, 3, 4];
const NewArray = [];
for(i = 0; i < newArray.length; i++){
    let NewTotal = newArray[i];
    NewArray.push(NewTotal + 1);
    console.log(NewArray);
}

function addOne(){
    const AddOne = [1, 2, 3];
    const NewaddOne = [];
    for(i =0; i < AddOne.length; i++){
        let FaddOne = AddOne[i];
        NewaddOne.push(FaddOne + 1);
        console.log(NewaddOne);
    }

    const addtwo = [-2, -1, 0, 99];
    const AddtwoNew = [];
    for(i = 0; i < addtwo.length; i++){
        let Twoadd = addtwo[i];
        AddtwoNew.push(Twoadd + 1);
        console.log(AddtwoNew);
    }
}
addOne();
