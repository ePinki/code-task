// Вы получаете массив чисел, возвращаете сумму всех положительных.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20


function positiveSum(arr) {
  let sumOfNumbers = 0;

  let newNumber = arr.filter((i) => i > 0);          // Отфильтровал начальный массив, убрав все отрицательные числа

  for (let i = 0; i < newNumber.length; i++) {      // Сумма всех числе в массиве
    sumOfNumbers = sumOfNumbers + newNumber[i];
  }

  return sumOfNumbers;
}

console.log(positiveSum([-1,-2,-3,-4,-5]))

