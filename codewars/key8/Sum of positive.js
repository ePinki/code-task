// Sum of positive
// Вы получаете массив чисел, возвращаете сумму всех положительных.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20


function positiveSum(arr) {
  let sumOfNumbers = 0;

  // Отфильтровал начальный массив, убрав все отрицательные числа
  let newNumber = arr.filter((index) => index > 0);          

  // Сумма всех числе в массиве
  for (let index = 0; index < newNumber.length; index++) {      
    sumOfNumbers = sumOfNumbers + newNumber[index];
  }

  return sumOfNumbers;
}

console.log(positiveSum([-1,-2,-3,-4,-5]))
