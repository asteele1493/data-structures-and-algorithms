function insertShiftArray (arr, value) {
  let midpoint = Math.floor(arr.length/2);
  let returnArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(i < midpoint) {
      returnArr[i] = arr[i];
      } if (i = midpoint){
      returnArr[i] = value;
      } else if (i > midpoint) {
        returnArr[i] = arr[i];
      }
    };
 return returnArr;
}

console.log(insertShiftArray([1, 2], 3));

