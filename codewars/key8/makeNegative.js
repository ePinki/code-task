// В этом простом задании вам дается число, и вы должны сделать его отрицательным. А может быть, число уже отрицательное?


//Base
function makeNegative(num) {
  let number = Math.sign(num)

  if (number == -1) {
    return num
  } else {
    let newNumber = num * -1
    return newNumber
  }
}


//Advanced 
function makeNegative(num) {
  return -Math.abs(num);
}


//Advanced 
function makeNegative(num) {
  return num < 0 ? num : -num;
}