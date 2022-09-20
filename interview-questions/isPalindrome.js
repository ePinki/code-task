// Функция проверки палиндрома 


// Base
function isPalindrome(string) {
  let arr = string.split('')
  let reversArr = arr.reverse('')
  let reversString = reversArr.join('')
  let revers = string === reversString

  return revers
}


//Advanced
function isPalindrome(string) {
  return string === string.split('').reverse().join('')
}


console.log(isPalindrome('шалаш'))