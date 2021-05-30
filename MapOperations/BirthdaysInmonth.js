//birth month of 50 individuals between the year 92 & 93. Find all the individuals having birthdays in the same month.
let map = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]]);
// gets count of individual in each month
for (let i = 1; i <= 50; i++) {
    let month = (Math.floor(Math.random() * 100) % 12) + 1;
    let valueCount = map.get(month);
    map.set(month, ++valueCount);
}
console.log("month and count of individuals birthday: ")
console.log(map);
console.log("People born in January : " + monthToIndividualMap.get("January"));
console.log("People born in February : " + monthToIndividualMap.get("February"));
console.log("People born in March : " + monthToIndividualMap.get("March"));
console.log("People born in April : " + monthToIndividualMap.get("April"));
console.log("People born in May : " + monthToIndividualMap.get("May"));
console.log("People born in June : " + monthToIndividualMap.get("June"));
console.log("People born in July : " + monthToIndividualMap.get("July"));
console.log("People born in August : " + monthToIndividualMap.get("August"));
console.log("People born in September : " + monthToIndividualMap.get("September"));
console.log("People born in October : " + monthToIndividualMap.get("October"));
console.log("People born in November : " + monthToIndividualMap.get("November"));
console.log("People born in December : " + monthToIndividualMap.get("December"));