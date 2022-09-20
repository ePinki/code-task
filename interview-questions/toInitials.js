// Функция создания инициалов 


//Base
function toInitials(name) {
  let nameArr = name.split(' ')
  let firstLettersArr = nameArr.map(function(element) {
    return element.slice(0,1).toUpperCase() + '.'
  })
  let initials = firstLettersArr.join('')
  return initials
}


//Advanced
function toInitials(name) {
  return name 
    .split(' ')
    .map(function(element) {
      return element.slice(0,1).toUpperCase() + '.'
    })
    .join('')
}

console.log(toInitials('Nazar yarmolchik'))