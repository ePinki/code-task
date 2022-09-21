//Функция поиска минимального и максимального значений в массиве 


//Base 
function minMax(arr) {
  const res = []
  const minValue = Math.min.apply(null, arr)
  const maxValue = Math.max.apply(null, arr)
  return res.push(minValue, maxValue)
}


//Advanced
function minMax(arr) {
  return [Math.min.apply(null, arr), Math.max.apply(null, arr)]
}


//ES6
const minMax = (arr) => {
  [Math.min(...arr), Math.max(...arr)]
}