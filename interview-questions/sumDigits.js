//Функция суммирования всех цифр числа


//Base 
function sumDigits(number) {
  const moduleNumer = Math.abs(number)
  const str = moduleNumer.toString()
  const arr = str.split('')
  const res = arr.reduce(function(sum, cur) {
    return Number(sum) + Number(cur)
  }, 0)
  return res
}


//Advanced
function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split('')
    .reduce(function(sum, cur) { return +sum + +cur }, 0)
}


//ES6
const sumDigits = (number) => {
  Math.abs(number)
  .toString()
  .split('')
  .reduce((sum, cur) => +sum + +cur, 0)
}