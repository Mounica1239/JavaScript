//arrow function 
let hello=(a,b)=> {
    return a+b;
}
console.log(hello(1,2));

//arrow function

let helloo=(a,b)=>(a*b)
console.log(helloo(1,6));

//imediately invoced function
//function expression or variable expression
(function(number1, number2) {
console.log(number1*number2);

})(10,5)

let hello1 = function(name) {
  console.log("Hello, " + name + "!");
};

hello1("John"); // Call the anonymous function with a name

//NUMBER METHODS
//toString();
//toString() method returns a number as astring
let x = 1234;
console.log(typeof x.toString());

console.log((123).toString());
(100+23).toString();

//toExponential() returns astring, with a number rounded and written using exponential notation
let y = 9.656;
console.log(y.toExponential(3));

//toFixed() returns a string with the number written with a specified number of decimals
let z= 9.656;
console.log(z.toFixed(0));
console.log(z.toFixed(1));
console.log(z.toFixed(2));
console.log(z.toFixed(3));

//toPrecision() returns a string with a number written with a specified length
let d= 9.6789;
console.log(d.toPrecision(1));
console.log(d.toPrecision(2));
console.log(d.toPrecision(3));
console.log(d.toPrecision(4));

//the Number() method can be used to converts javascript variables to numbers
console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number(" 10"));
console.log(Number("10 "));
console.log(Number("10.33"));
console.log(Number("10 33"));
console.log(Number("10, 33"));
console.log(Number("Mounica"));

//parseInt() parses a string and returns awhole number.spaces are allowed only the first number is returned
console.log(parseInt("-10.33"));
console.log(parseInt("10.33"));
console.log(parseInt("10 30 80"));
console.log(parseInt("10 years"));
console.log(parseInt("years 33"));

//parseFloat() parses a string and return a number spaces are allowed only the first number is returned
console.log(parseFloat("10.33"));
console.log(parseFloat("-10.33"));
console.log(parseFloat("10 90"));
console.log(parseFloat("10, 33"));
console.log(parseFloat("years"));


//NUMBER PROPERTIES
//Number.MAX_VALUE: 
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

//Number.MIN_VALUE:
console.log(Number.MIN_VALUE); // 5e-324

//Number.POSITIVE_INFINITY:
console.log(Number.POSITIVE_INFINITY); // Infinity

//Number.NEGATIVE_INFINITY:
console.log(Number.NEGATIVE_INFINITY); // -Infinity

//Number.NaN:
console.log(Number.NaN); // NaN

// Number.EPSILON:
console.log(Number.EPSILON); // 2.220446049250313e-16






















