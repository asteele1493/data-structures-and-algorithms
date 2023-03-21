"use strict";

function repeatedWord(str) {
  let strCount = 0;
  let splitStr = str.split("");
  let strMap = new Map();
  for (let i = 0; i < splitStr.length; i++) {
    strMap.set(splitStr[i], 1);
  }
  for (let i = 0; i < strMap.length; i++) {
    let strCount = strMap.get(splitStr[i]);
  }
    if (strCount > 1) {
      return strCount[i];
    } else {
      return console.log("There is no repetition.");
    }

}

module.exports = { repeatedWord };
