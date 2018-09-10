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
    })