const reverseString = function(str) {
  let strArray = [];

  // this loop will pull out each character and add it to an array
  for (let i=0; i<str.length; i++) {
    strArray.push(str.slice(i,i+1));
  }

  // this method reverses the array
  strArray.reverse()

  // this turns the reversed array into a string again
  return strArray.join("")
};

module.exports = reverseString;
