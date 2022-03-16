//type conversion = change datatype of a value to another
// (strings, boolean, numbers)

let age = "12"

console.log(typeof age);// typeof gives the type of value as an output

age = Number(age);// Number constructor is used to change datatype of any value into number datatype
age += 1;

console.log("Happy Birthday! You are ", age, " years old");

//another example

let x;
let y;
let z;

x = Number("pizza")
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);//result = NaN number,this will give NaN as result because x is a string
console.log(y, typeof y);//result = 3.14 string
console.log(z, typeof z);///result = true boolean

