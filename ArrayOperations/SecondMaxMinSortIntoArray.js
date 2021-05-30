//Random 3 digit number
let array=new Array();
//iterating the loop for getting 10 threeDigit random number
let numArray = new Array();
for (i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 900) + 100;
    numArray.push(number);
}
//find 2nd maximum and minimum value
let sortedArray = numArray.slice(0).sort();
console.log("Sorted Numbers are: " + sortedArray)
console.log("Second Max Number : " + sortedArray[sortedArray.length - 2]);
console.log("Second Min Number : " + sortedArray[1]);