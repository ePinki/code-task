// Уникальность всех символов в строке
// Напишите функцию, которая определяет уникальны ли все символы в строке.
//Регистр должен учитываться: ‘a’ и ‘A’ разные символы.

//Через lastIndexOf проверяем, есть ли повторение элемента в строке
//Сравниваем индекс текущего элемента с найденым индексом через indexOf
//Если индексы отличаются, значит найденный элемент это копия нашего текущего
function isUnique(string) {
  for (let index = 0; index < string.length; index++) {
    if (string.lastIndexOf(string[index]) !== index) {
      return false;
    }

    return true;
  }
}

// Создам уникальюную коллекцию и на каждой интерации цикла записываем текущий элемент
// Если текущий элемент записан, значит элемент повторяется и тоглда мы выводим false
function isUnique(string) {
  const set = new Set();

  for (let index = 0; index < string.length; index++) {
    if (set.has(string[index])) {
      return false;
    }

    set.add(string[index]);
  }

  return true;
}

//Передам нашу строку в уникальную коллецию
//Cравниваем длину коллекции с длиной изначальной строки
function isUnique(string) {
  return new Set(string).size === string.length;
}
