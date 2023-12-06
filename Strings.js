
//find the length of the string 
let str = "Mounica";
let length=str.length;
console.log(length);

//find the replace method in string
let text = "mounica , bommisetti"
let newStr = text.replace("bommisetti", "Bhanu");
console.log(newStr);

//find the replaceAll in String
let a = "Mounica Bommisetti Bhanu Bommisetti";
let b = a.replaceAll("Bommisetti" ,"BHANU");
console.log(b);

//find the UpperCase in string
let text1 ="Mounica";
let text2 =text1.toUpperCase();
console.log(text2);

//find the lowercase in string
let text3 = "BHANU";
let text4 = text3.toLowerCase();
console.log(text4);

//find the concat in string 
let text5 = "Bhanu";
let text6 = "Mounica";
let text7 = text5.concat(" ", text6);
console.log(text7);

//find the trim() in String 
let text8 = "           Bommisetti";
let text9 = text8.trim();
console.log(text9);

//find the trimStart() in String 
let text10 = "        mounica ";
let text11 = text10.trimStart();
console.log(text11);

//find the trimsEnd() in String 
let text12 = "        mounica   "
let text13 = text12.trimEnd();
console.log(text13);

//find CharAt() in string 
let text14 = "Mounica";
let char = text14.charAt(6);
console.log(char);

//find the split in string 
let text15 = "a,b,c,d,e,f,g";
let text16 = text15.split(",");
console.log(text16);

//find the charcodeAt in string
let text17 = "Mounica";
let chars = text17.charCodeAt(6);
console.log(chars);

//find the slice in string 
let text18 ="mounica";
console.log(text18.slice(0,5))

//use find the negative also in slice
let text19="Bhanu";
console.log(text19.slice(-5,-2))

//find the substring 
let text20= "bommisetti";
console.log(text20.substring(2,5));

//find the substring you can find -ve way
//in -ve values consider the zero index
let text21= "bommisetti";
console.log(text21.substring(-4,2));

//find the padEnd in string
let text23="c";
console.log(text23.padEnd(4,"k"))


//find the paStart in string
let text22="c";
console.log(text22.padStart(4,"k"))

//Search Methods
//indexof
let text24 = "Mounica hello";
console.log(text24.indexOf("Mounica"));