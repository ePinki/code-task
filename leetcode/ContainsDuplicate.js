//Поиск дубликата в массиве через создание уникальной коллекции

const containsDuplicate = function (nums) {
  const setNums = new Set(nums);
  return setNums.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]));
