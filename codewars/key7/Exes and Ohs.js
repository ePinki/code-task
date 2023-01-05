//Check to see if a string has the same amount of 'x's and 'o's.
//The method must return a boolean and be case insensitive. 
//The string can contain any char.


function XO(str) {
  const arr = str.toLowerCase().split('')
  return arr.filter(element => element == 'x').length == arr.filter(element => element == 'o').length
}

console.log(XO("xxOo"))