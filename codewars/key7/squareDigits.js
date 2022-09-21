// В этом ката вас просят возвести в квадрат каждую цифру числа и объединить их.
//Например, если мы запустим 9119 через функцию, получится 811181, потому что 9^2 равно 81, а 1^2 равно 1.


//Base
function squareDigits(num) {
  const newArr = ('' + num)
    .split('')
    .map(function(el) {
      return Math.pow(el, 2)
    })
    .join('')
  const newNum = Number(newArr)
  return newNum
}


//Advanced 
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}


console.log(squareDigits(3212))