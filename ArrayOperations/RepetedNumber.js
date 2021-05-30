//Take a range from 0 –100 and find the digits that are repeated twice and store them in an array.
let doubleDigitNumbers=new Array();
for(i=1; i<100; i++)
{
    if(i%11 ==0)
    {
        doubleDigitNumbers.push(i);

    }
}
    console.log("double digit Numbers are :"+doubleDigitNumbers.toString());
