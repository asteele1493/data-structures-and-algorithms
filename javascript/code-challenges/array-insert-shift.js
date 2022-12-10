function insertShiftArray (arr, value) {
  let midpoint = Math.floor(arr.length/2);
  let returnArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(i < midpoint) {
      returnArr[i] = arr[i];
      } else if (i == midpoint){
      returnArr[i] = value;
      returnArr[i+1] = arr[i];
      } else {
        returnArr[i+1] = arr[i];
        }
    }
 return returnArr;
}

insertShiftArray([1, 2], 3);
