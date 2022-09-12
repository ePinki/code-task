// В этом простом задании вам дается число, и вы должны сделать его отрицательным. А может быть, число уже отрицательное?


//1 
function makeNegative(num) {
  let number = Math.sign(num)

  if (number == -1) {
    return num
  } else {
    let newNumber = num * -1
    return newNumber
  }
}


//2
function makeNegative(num) {
  return -Math.abs(num);
}


//3
function makeNegative(num) {
  return num < 0 ? num : -num;
}