//Если мы перечислим все натуральные числа ниже 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих кратных равна 23.

//Завершите решение так, чтобы оно возвращало сумму всех кратных 3 или 5 ниже переданного числа.
//Кроме того, если число отрицательное, верните 0 (для языков, в которых они есть).

//Примечание: Если число кратно как 3, так и 5, посчитайте его только один раз.

//Base
function solution(number) {
  let arr = [];
  let multiple = [];

  // push all num between 0 and the number to arr
  for (let i = 0; i < number; i++) {
    arr.push(i);
  }

  // if number in arr is a multiple or 3 or 5 push it to multiple
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiple.push(i);
    }
  }

  // sum the total of the multiple array
  const sumTotal = multiple.reduce((sum, num) => sum + num, 0);

  return sumTotal;
}

console.log(solution(10));

///
