// let blockLet = "blockLet";
// var blockVar = "blockVar";
// const blockConst = "blockConst";
const globalVar = "globalVar";
console.log("before", globalVar)
function test() {

    console.log(globalVar);

}


console.log(globalVar);

//Arithemetic Operators
console.log("Arithmetic Operators");

let a = 10, b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Assignment Operators
console.log("Assignment Operators");

let c = 10;
let d = 20;

c += d;
console.log(c);

c -= d;
console.log(c);

c *= d;
console.log(c);

c /= d;
console.log(c);

c %= d;
console.log(c);

c **= d;
console.log(c);

//Comparision Operators
console.log("Comparision Operators");

let e = 10;
let f = 20;

console.log(e == f);
console.log(e != f);
console.log(e === f);
console.log(e !== f);
console.log(e > f);
console.log(e < f);
console.log(e <= f);
console.log(e >= f);


console.log(5>>1);
console.log(5<<1);

//Ternary Operator
console.log("Ternary Operator");
let age = 20;
let status = (age>=18) ? "Adult" : "Minor";
console.log(status);
console.log("\n");

//Type Operators
console.log("Type Operators");
console.log("typeof 42", typeof 42);
console.log("typeof '42'", typeof '42');
console.log("typeof true", typeof true);
console.log("typeof null", typeof null);
console.log("typeof {}", typeof {});
console.log("typeof []", typeof []);

//instanceof example
console.log("instanceof example");
let arr = [1,2,3];
console.log("arr instaneof Array ", arr instanceof Array);
