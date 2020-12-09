let input = $$('pre')[0].innerText.split('\n').map(parseFloat)
let first = 0;
let last = 25;
let obj = {}
input.slice(0,25).map(e => obj[e]=true)

let firstVal, lastVal;
while(last < input.length) {
   firstVal = input[first]
   lastVal = input[last]
  if (!input.slice(first,last).map(e => Math.abs(lastVal-e)).map(e => obj[e]).reduce((c,v) => c||v,false)) {
    
    break;
  }
  
  delete obj[firstVal];
  first++;
  last++;
  obj[input[first]] = true
  obj[input[last]] = true
}
console.log(lastVal)

let search = 10884537;
function sumArray(arr) {
  return arr.reduce((c,v) => c+v,0)
}
function se() {
for(var i =2; i<input.length-3;i++) {
  let windowSize = i;
  console.log('Search window size ' + windowSize)
  for(var j=0;j<input.length-windowSize;j++) {
    let arr = input.slice(j,j+windowSize)
    if ( search == sumArray(arr) ) {
      arr.sort()
      return arr.pop() + arr.shift()
    }
  }
}
}
console.log(se())
