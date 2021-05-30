//store the values into map dictionary
let map = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
//using while loop to Repeat till any one of the number has reached 10 times
while(valuecount < 10){
    //Roll a die and find the number between 1 to 6
    let dice = Math.floor(Math.random() * 10) % 6 + 1;
    //Repeat the Die roll and find the result each time
    valuecount = map.get(dice);
    map.set(dice, ++valuecount);
}
console.log(map);
// the number was reached maximum times and the one that was for minimum times
console.log("Minumim dice count:"+Math.min(...map.values()));
console.log("Maximum dice value:"+Math.max(...map.values()));
