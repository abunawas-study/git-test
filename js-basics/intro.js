//coding challenge #1 @ javascript fundamentals - part 1

let markMass = 95;
let markHeight = 1.88;

let johnMass = 85;
let johnHeight = 1.76;

let marksBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
console.log(marksBMI, johnBMI);

let markHigherBMI =  marksBMI > johnBMI;
console.log(markHigherBMI);

//coding challenge #2 @ javascript fundamentals - part 1

if (marksBMI > johnBMI){
    console.log("Mark's BMI is Higher than John's")
    console.log("Mark's BMI is " , "(" + marksBMI + ") Higher than John's BMI" , "(" + johnBMI + ") !"); 
}
else{
    console.log("John's BMI is Higher than Mark's")
    console.log("John's BMI is " , "(" + johnBMI + ") Higher than Mark's BMI" , "(" + marksBMI + ") !"); 
}