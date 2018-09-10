//Zachary Sexton

//creating and filling array
const musketeers = ["Athos", "Porthos", "Aramis"];
//testing to print in for loop
for(i = 0; i < musketeers.length; i++)
    {
        console.log(musketeers[i]);
    }

        //adding to my array
        musketeers.push("D'Artagnan");
    // for each
     musketeers.forEach(myElement => 
        {
            console.log(`For each ${myElement}`);
        });
      //remove aramis at particular index
      musketeers.splice(2,1);
    //for of
    let theMusketeer;
    for(theMusketeer of musketeers)
        {
            console.log(theMusketeer);
        }
 //values to sum and use for max
const values = [3, 11, 7, 2, 9, 10];
//function to sum an array
function sum(array)
{
    var z = 0
    for(var i = 0; i < array.length; i++)
    {
        z = z + array[i];
    }
    console.log(z);
}
//using the sum function with the values array created 
sum(values);

//using the Math.max function and the ... is to find all values in the array of values
console.log(Math.max(...values)); 
