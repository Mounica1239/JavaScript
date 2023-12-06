//find the secondlargest number example1
function secondLargest(arr) {
    if (arr.length < 2) {
    }
    var sortedArray = arr.sort((a, b) => b - a);
    return sortedArray[1];
  }
  console.log(secondLargest([10, 40, 30, 20, 50])); // Output: 40



  // //find the secondlargest number example2
  //  let arr = [1,100,10,20,80, 70,500, 90]
  //  result = arr.sort((a,b)=>b-a);
  //  console.log(result[1]);


//    var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > largest ) {
//     largest = arr[i];
//   }
// }
// console.log(largest);
// console.log(arr.sort());



//find the count of the even numbers and odd numbers
let arr = [1,2,3,4,5];
let evenNumbers=0;
let oddNumbers=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0) {
    evenNumbers++;
}
else {
  oddNumbers++;
}
}

console.log("even numbers count is " +evenNumbers);
console.log("odd numbers count is " +oddNumbers);

//find the count of the even numbers and odd numbers using whileloop

let arr4 =[2,4,6,1];
let evenNumberss= 0;
let oddNumberss=0;
let i =0;
while(i<arr4.length) {
    if(arr4[i]%2==0) {
    evenNumberss++;
    } else {
       oddNumberss++;
    }
    i++;
}
console.log(" the even numbers count is " +evenNumberss);
console.log("odd numbers count is " + oddNumberss);



//find the number of zeros count and nonZeros count
let arr1 = [1,2,3,4,5,0,7,0];
let countZero =0;
let countNonZero = 0;
for (i=0;i<arr1.length;i++) {
  if(arr1[i]==0) {
    countZero++;

  }else {
    countNonZero++;

  }
}
console.log("the number of zeros count is "+countZero);
console.log("the number of zeros count is "+countNonZero);

let arr2 = [1,3,5,4];
let evenNumbers1 = false;
let oddNumbers1 = false;

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        evenNumbers1 = true; 
    } else {
        oddNumbers1 = true;
    }
}

if (evenNumbers1 && oddNumbers1) {
    console.log("Both even and odd numbers are mixed");
} else if (evenNumbers1) {
    console.log("All numbers are even");
} else if (oddNumbers1) {
    console.log("All numbers are odd");
}


//find the number is accending order itis true oresle false
 
let arr3 =[1,3,5,7,6];
let accesing=0;
for(let i=0;i<arr3.length-1;i++) {
    if(arr3[i+1]>arr3[i]){
    accesing++;
} else {
     console.log("false");
           break;
}
}
if(accesing==arr3.length-1) {
         console.log("true");

}

//factorial of number in different way 
let n = 5;
let fact =1;
let calculation = "";
for(i=1;i<=n;i++) {
    fact *=i;
    calculation += i;
    if(i<n) {
       calculation += " * " 
    }
    
}
console.log(calculation += " = " +fact);

//5*4*3*2*1 = 120

  

