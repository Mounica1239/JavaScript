//1. Create a function that converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples :

// toCamelCase("A-B-C") ➞ "ABC"

// toCamelCase("the-stealth-warrior") ➞ "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") ➞ "TheStealthWarrior"

function toCamelCase(str) {
    let camelCase = "";
    for(let i =0;i<str.length;i++) {
        if(str[i]!="-" && str[i]!="_") {
         camelCase+=str[i];
        }
        
    }
     return  camelCase;
}
    console.log(toCamelCase("A-B-C"));
    console.log(toCamelCase("the-stealth-warrior"));
    console.log(toCamelCase("The_Stealth_Warrior"));

//  2.Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.	
// Examples :

// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]

function toNumInStr(newStr) {
    let numInStr = [];
    for(let i=0;i<newStr.length; i++) {
        if(/\d/.test(newStr[i])) {
             numInStr.push(newStr[i]);
        }
    }
            return  numInStr;

}
console.log(toNumInStr(["1a", "a", "2b", "b"]));
console.log(toNumInStr(["abc", "abc10"]));
console.log(toNumInStr(["this is a test", "test1"]));
    