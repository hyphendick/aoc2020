function partition(s, min, max) {
  s = s.split('')
  var nextMin = min
  var nextMax = max
  var range = max - min+1
  var low = {'F': true, 'L': true}
  var high = {'B': true, 'R': true}
  var DEBUG = false
  while (s.length > 0 && nextMax != nextMin) {
  if (DEBUG){
    console.log(` state ${nextMin} ${nextMax} ${range} ${s}`)
    }
  range = range/2
    if (low[s.shift()]) {
      nextMax = nextMax - range
    } else {
      nextMin = nextMin + range
    }
   }
   if (DEBUG)
       console.log(`end state ${nextMin} ${nextMax} ${range} ${s}`)
       
    return nextMin
}

function parserow(r) {
  var row = partition(r.slice(0,7),0,127)
  var col = partition(r.slice(7,10),0,7)
  return row*8+col
}

var a = $$('pre')[0].innerText.split('\n')
a.pop()
a = a.map(parserow)
a.sort((b,c) => -1*(b-c))

console.log(Math.max(...a))
for(var i = 0; i<a.length -2;i++) {
  if (a[i]-a[i+1] >1) {
    console.log(a[i]-1)
    break;
  }
}
