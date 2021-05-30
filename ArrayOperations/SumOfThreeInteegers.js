//To show Sum of three Integer adds to ZERO
let numbers=[1,2,3,4,5,,-1,-2,-3,-4,-5,0];
console.log("Triples with sum Zero:")
for(i=0;i<numbers.length-1;j++)
{
    for(j=i+1;j<numbers.length;j++)
    {
        for(k=j+1;k<numbers.length;k++)
        {
            if(numbers[i]+numbers[j]+numbers[k]==0)
                {
                    console.log(numbers[i],numbers[j],numbers[k]);
                }
        }
    }
}