const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  function tokenize(str){
    const arr = str.split();
    return arr;
  }
  console.log(tokenize("Hello World"))
};

const reverse = str => {
  // TODO - write a function which reverses the string
  const arr = str.split("");
  const reversed = arr.reverse();
  const joined = reversed.join("")
  return joined;
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  function uniqueOnes(arr){
    const unique = [...new Set(arr)];
    return unique;
  }
  console.log(uniqueOnes(["Hello", "World", "Hello"]));
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  
    if(num === 0 || num === 1)
      return 1;
    for (let i = num - 1; i >= 1; i--){
      num *= i;
    }
    // console.log(num);
    return num;
  }  
const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
    arrCombined = arr1.concat(arr2);
    for (let i = 0; i < arrCombined - 1; i = i+2){
      split = arrCombined.slice(i, i+1)
    }
    return split;
  }
  console.log(([1, 2, 3], [5, 3, 1]))
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

// assert(1 < 2);
// assert(1 + 2 === 3);
// assert([2, 3][0] === 2);
// assert(reverse("3df") === "fd3");
// assert(tokenize("Hello World") === ["Hello", "World"])
// assert(uniqueOnes(["Hello", "World", "Hello"]) === ["Hello", "World"])
assert(factorial(5) === 120);
// assert(zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]])