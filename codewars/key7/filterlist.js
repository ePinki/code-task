//  7 kyu - List Filtering
//Base
function filter_list(item) {
  let integers = []
  for(let i = 0; i < item.length; i++){
    if(Number.isInteger(item[i])){
      integers.push(item[i])
    } 
  }
  return integers
}


//Advanced
function filter_list(item) {
  return item.filter(Number.isInteger);
}


//2
function filter_list(l) {
  return l.filter(function(item) {
    return typeof item === 'number';
  });
}