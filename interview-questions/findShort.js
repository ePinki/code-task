//Функция поиска самого короткого слова 

//Base
function findShort(string) {
  let wordsArr = string.split(' ');
  let sortedWordsArr = wordsArr.sort(function(a,b) {
    return a.length - b.length
  })
  return sortedWordsArr[0]
}

//Advanced
function findShort(string) {
  return string 
    .split(' ')
    .sort(function(a,b) { return a.length - b.length })[0]
}


console.log(findShort('Hello im Nazar'))

