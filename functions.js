function showMessage(){
    let message = "Hello I'm Javascript";
    console.log(message);
}
//All functions implicitly return undefined if they don’t explicitly return a value.
showMessage();//this is a simple function without any parameter and argument

function showMessage(age){
    let message = "Hello I'm Javascript" + " and I'm " + age + " years old";
    console.log(message);
}

showMessage(27);//this function has a parameter called age and 27 is passed as an argument to this function when it
//is being invoked

/* functions are first class citizens which means you can treat fucntions like values of other types*/
//for example
function add(a,b){
  return a+b;
}
let sum = add;//here we assigned this function to a variable named sum

let result1 = sum(21,34);//we can call a function by passing arguments to this variable
console.log(result1);//result = 55
/*Because functions are values, youcan pass them as an argument to another function*/
function average(a,b,fn){//in this line the third parameter is a function  
  return fn(a,b)/2
}
//Now you can pass the sum to average function as follows

let result2  = average(10,20,sum);

console.log(result2);//result = 15