//Завершите функцию, которая принимает допустимую строку и возвращает целое число.
//Подождите, это было бы слишком просто! Каждый символ строки должен быть преобразован в шестнадцатеричное значение ее ascii-кода, тогда результатом должна быть сумма чисел в шестнадцатеричных строках (игнорируйте буквы).

// "Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
// "Hello, World!"  ==> 91
// "Forty4Three"    ==> 113


//Base
function hexHash(code){
  return code = code.split('')
    .map(function(element){
        return element.charCodeAt().toString(16)
    })
    .join('')
    .replace(/[^\d]/g,'')
    .split('')
    .reduce((a,b) => Number(a) + Number(b), 0)
}

