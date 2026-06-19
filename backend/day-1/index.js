const { addData, minData, mulData, divData } = require("./Cal"); //Importing the addData function from Cal.js

console.log(10 + 30);
console.log("Hello");

let result = addData(150, 250);
console.log(result);
let result1 = minData(250, 150);
console.log(result1);
let result2 = mulData(10, 20);
console.log(result2);
let result3 = divData(100, 10);
console.log(result3);

//  "type": "commonjs"     require() //Import
