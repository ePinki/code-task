// Учитывая массив / список [] целых чисел , постройте массив произведений того же размера,
// чтобы prod[i] был равен произведению всех элементов Arr[], кроме Arr[i].

// productArray ({1,5,2}) ==> return {10,2,5}
//  первый элемент 10 является произведением всех элементов массива, кроме первого элемента 1
//  Второй элемент 2 является произведением всех элементов массива, кроме второго элемента 5
//  Третий элемент 5 является произведением всех элементов массива, кроме Третьего элемента 2


function productArray(numbers) {
  let newArr = numbers.map(
    (element) => numbers.reduce((prev, curr) => prev * curr) / element
  );

  return newArr;
}

console.log(productArray([3, 27, 4, 2]));



