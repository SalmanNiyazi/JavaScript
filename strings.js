let firstString = "It's alright";
console.log(text.length);//we use the length property to find the length the number of a string i.e. number of characters.

let secondString = "We are the so-called \"Vikings\" from the north"//escaping qoutes using backslash
console.log(text)

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
/*There are three methods for extracting a part of string:
slice(start,end)
substring(start,end)
substr(start,length of extracted string)
*/
let firstExtractedString = txt.slice(6,18)
//console.log(firstExtractedString)// GHIJKLMNOPQR

let secondExtractedString = txt.substring(-7,14)
//console.log(secondExtractedString)//when we give a negative value to substring it starts the extraction from 0

let thirdExtractedString = txt.substr(6,2)
console.log(thirdExtractedString)//substr is similar to other two methods but the difference is that second parameter specifies
//the length of extracted string 

let text = "Please visit Himachal";
let newText = text.replace("Himachal", "Kashmir");
/*The replace() method does not change the string it is called on.
The replace() method returns a new string.
The replace() method replaces only the first match*/
console.log(newText);//Please visit Kashmir
let array = text.split(" ")//split method is used to convert a string into an array
//for example here we are splitting the string on spaces and converting each word into an element of array
console.log(array[0]);//Please 
