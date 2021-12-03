$$('pre')[0].innerText.split('\n')
var a = $$('pre')[0].innerText.split('\n')
a.pop()
a.reduce((prev, cur) => {
var nxt = cur.split('').map(x=>parseInt(x)).map((x,i) =>  prev[i]+x)
return nxt
}, Array(a[0].length).fill(0)).map(z => (z> a.length/2)*1)
