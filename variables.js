// A variable is a container for storing data
//A variable behaves as if it was the value that it contains

//Two steps:
//1. Declaration (var,let,const)
//2. Assignment (= assignment operator)

let age  = 23;//Numbers
age += 1; // this can be written as age = age + 1
let stringAge = "23";
stringAge += 1;
let firstName = "Alex"; //Strings
let lastName = "Hales";
let student  = true; //boolean

console.log(stringAge);// this would give 231 as result because this is a string and it will concatenate.

console.log(firstName + " " + lastName + " is " + age);//concatenation of strings
console.log(student);