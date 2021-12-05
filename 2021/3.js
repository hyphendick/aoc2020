$$('pre')[0].innerText.split('\n')
var a = $$('pre')[0].innerText.split('\n')
a.pop()
a.reduce((prev, cur) => {
var nxt = cur.split('').map(x=>parseInt(x)).map((x,i) =>  prev[i]+x)
return nxt
}, Array(a[0].length).fill(0)).map(z => (z> a.length/2)*1)


$$('pre')[0].innerText.split('\n')
var a = $$('pre')[0].innerText.split('\n')
a.pop()
var inp = a
for(var i = 0, e = a[0].length; i < e; i++)
{
  var res = calc(inp, i)
  if (res.length ===1) {
    console.log(res);
    break;
  }
  inp = res
}
function calc(_inp, bit, neg){
  var ones =[], zeroes =[]
  var out = _inp.reduce((prev, cur) => {
    cur[bit] === '1' ? ones.push(cur) : zeroes.push(cur)
  var nxt = cur.split('').map(x=>parseInt(x)).map((x,i) =>  prev[i]+x)
  return nxt
  }, Array(_inp[0].length).fill(0)).map(z => (z>= _inp.length/2)*1) // < for other one
  if (out[bit] === 1) {
    return ones
  } else { return zeroes}
}
