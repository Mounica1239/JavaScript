//1.reverse String...............................
let str = "BHANU";
//first convert the string in character array using split method with use string empty character
//reverse method arrayreverse to array 
//using join method with empty character convert array in to the string
let reveseString= str.split('').reverse().join(' ');
console.log(reveseString);


 //2.reverse words in javascript...............................
function reverseWords(input){
    return input.split(" ").reverse().join(" ");
}
let inputString = "Mounica Bommisetti Bhanu";
let reversedString = reverseWords(inputString);
console.log(reversedString);


//3.remove whitesspaces 
function removeWhiteSpaces(input) {
    //replace all occurrences of one or more white space characters with an empty string ''.
    //g  all occurrences are replaced, not just the first one.
    // \s+ matches one or more white space characters 
    return input.replace(/\s+/g, '');
}


let inputsString = "M o u n i c a , h e l l o";
let withoutWhiteSpace = removeWhiteSpaces(inputsString);
console.log(withoutWhiteSpace);


//4.Find the length of the string 
let text = "Mounica";
let length = text.length;
console.log(length);


//5.find the vowels
 let a = "mOunica";
 for(a1 in a) {
    if(a[a1]=="a"||a[a1]=="e"||a[a1]=="i"||a[a1]=="o"||a[a]=="u"||a[a1]=="A"||a[a1]=="E"||a[a1]=="I"||a[a1]=="O"||a[a1]=="U") {
        console.log(a[a1]);
    }
 }


//6.Create a function that takes two numbers as arguments and returns their sum.

function sum(num1, num2){  
}
var num1 =10;
var num2 =20;
var sum=num1+num2;
console.log(sum);


//7.Write a function that takes an integer minutes and converts it to seconds.
function minitesToSeconds(minites) {
    return minites*60;
}
var minites = 5;
var seconds = minitesToSeconds(minites);
console.log(seconds);



//8.Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function increamentsNumber(num) {
    return num+1;
}
var num=10;
var result = increamentsNumber(num) 
console.log(result);


//9.sniCreate a function that takes voltage and current and returns the calculated power.
function calculatePower(voltage, current) {
    return voltage * current;
}
// Example usage:
const voltage = 220; // in volts
const current = 5;   // in amperes
const power = calculatePower(voltage, current);
console.log(power); // Output: "The power is 1100 watts"


//10.Create a function that takes the age in years and returns the age in days.
//age*(365+age/4)
function ageInDays(age) {
    let days = (age*365);
    return days;
}
console.log(ageInDays(27));


//11.Write a function that returns the string "something" joined with a space " " and the given argument a.
function joinWithString(a){
    return  "something " + a;
}
var result =  joinWithString("example");
console.log(result);


//Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function twoIntegers(a, b) {
    return a==10|| b==10|| a+b===10;
}
 var result = twoIntegers(5,5);
console.log(result);


//Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function trueOrFalse(string1, string2) {
    return string1.length==string2.length;
}
var result = trueOrFalse("mounica" , "bhanu")
console.log(result);


//Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
 var  greeting = (name) => {
    return "Mounica! " + name;

 }
 var result =  greeting("Good Morning");
 console.log(result);

 
 //Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).


 //equal zero, =zero -venegative  +ve positive 
//  var text50= promt("enter your number");
//  if(text50>0) {
//     console.log("positive value");


//  }else if(text50<0) {
//     console.log("negative value")


//  }else {
//     console.log(Zero);

//  }

 
//for loop
for(let a=1; a<=3; a++) {
    console.log(a);
}
for(let a=1; a<=3; a++) {
    console.log(" a");
}
for(a=-1; a>=-10; a--){
    console.log(a);  
}
for(let a=1; !(a>=10+1); a++) {
    console.log(a);
}

//revese string
    function reverse(str){
        let newstr="";
        for(i=str.length-1;i>=0;i--){
            newstr+=str[i];

        }
        return newstr;
    }
    console.log(reverse("MOUNICA"));
    
//revese string string with spaces
let string="Mounica";
let reversed ="";
for(i=string.length-1;i>=0;i--){
    reversed+=string[i]+' ';
}
console.log(reversed)
//using operators 
// write a js program take the string to print the count of the numbers 
var  inputString1 = "HelloWorld111111";
var count = (inputString1.match(/\d/g) || []).length;

console.log("Count of numeric digits:", count); 
// Output: Count of numeric digits: 5


// write a js program take the string to print the count of the numbers 
var ab = "haahdashgd1314124";
 var count =0;
for (i=0;i<ab.length; i++){
    if(ab[i]=="0"||ab[i]=="1"||ab[i]=="2"||ab[i]=="3"||ab[i]=="4"||ab[i]=="5"||ab[i]=="6"||ab[i]=="7"||ab[i]=="8"||ab[i]=="9"){
        count++;
    }
}
console.log(count)

//find the odd numbers only 
let arr = [4,6,9,87,56,7]
let arr1 = []
let ac= arr.length;
for(let i = 0 ; i <arr.length;i++){
    if(arr[i]%2!==0){
        arr1.push(arr[i]);
    
}
}
console.log(arr1)


//
let arr2 =[1,2,3,4,5];
let arr3 =[]
arr2[arr2.length] = 6; // Add 6 at the end of the array
arr2[arr2.length] = 7;
arr2[arr2.length] = 8;
for(let i=0; i<=arr2.length; i++) {

}
console.log(arr2);
//
let arr4 =[1,2,3,4]
let index = arr4.length;
arr4[index]=5;
arr4[index]=6;
console.log(arr4);
//

let arr5=[1,2,3];

arr5.push(4,5,6);
console.log(arr5);


//oka function liki nko function ni sort chesinapudhu daninni callback ani antharuu.............
