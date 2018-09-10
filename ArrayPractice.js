movie1 = "Pacific Rim";
const movies = ["Pacific Rim", "Lilo & Stitch", "Forrest Gump", "Hawaii 5-0", "Jurassic Park"];
movies[2]; // equals Forrest Gump
//JAVASCRIPT DOESN'T CARE WHAT YOU PUT IN THE ARRAY STRINGS NUMBERS OBJECTS BOOLEAN ALL VALID IN THE SAME ARRAY

//store different types of elements 
const elements = ["Aloha", 7, { message: "Howzit mom" }, true];
// DONT HAVE TO DECLARE THE SIZE

console.log(movies.length);
console.log(movies[1]);
//iterating over an array

for(i = 0; i < movies.length; i++)
    {
        console.log(movies[i]);
    }
    
    let ofMovie;
    for(ofMovie of movies)
        {
            console.log(ofMovie);
        }
//anonymous function is what do you want to do for each iteration of the array so the function is the parameters
    movies.forEach(myElement => 
    {
        console.log(`For Loop ${myElement}`);
    });

    //adding to an array
    movies.push("Magnum PI");
    for(i = 0; i < movies.length; i++)
    {
        console.log(movies[i]);
    }
    //getting the last element added to the array

    console.log(movies[movies.length - 1]);
  
    //add to the beginning of an array use unshift
    movies.unshift("50 First Dates");
    console.log(movies[0]);

    //remove the last element from an array
    movies.pop();

    //put it into a new variable
    let theEndElement = movies.pop();

    //splice(index to start, number of elements to remove)
    movies.splice(1,2);
    //so starts at the second element at index one and then removes the next two that follow

    