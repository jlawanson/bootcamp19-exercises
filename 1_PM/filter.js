// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

const multOf7 = el => {
  if (typeof el != "number"){
    return false
  }    
  else if (el % 7 == 0){
    return true
  }
};

Array.prototype.filter = function(fun) {
  const newArr = []
  this.forEach((el) => {
    if (fun(el)){
      newArr.push(el)
    }
  })
  return newArr;
};

const newArr = arr.filter(multOf7);

console.log(newArr);
