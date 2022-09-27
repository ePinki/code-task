// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


//Base
function accum(string) {
  return string = string.split('').map(function(element,index) {
    return element.toUpperCase() + element.toLowerCase().repeat(index)
})
.join('-')
}