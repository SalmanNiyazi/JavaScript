/*arithmetic expression is a combination of...
operands (values, variables,etc.)
operators(+ - * / %)
that can be evaluated to a value
ex. y = x + 5; 
*/

let students = 20;
//students = students + 1;// Answer = 21
//students  = students - 1;// Answer = 19
//students  = students * 2;// Answer = 40
//students  = students / 2;// Answer = 10 
//let extraStudents = students % 2;// Answer = 0
//console.log(variable i.e students/extraStudents)

/*
operator precedence
1. parenthesis()
2. exponents
3. multiplication & division
4. addition & subtraction
*/

let result = 1 + 2 * (3 + 4);
console.log(result);//result = 15

result = (1 + 2) * 3 + 4;
console.log(result);//result = 13
// Notice how same expression is giving different results because of operator precedence.
 