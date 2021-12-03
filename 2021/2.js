$$('pre')[0].innerText.split('\n')
var h=0, v = 0
var a = $$('pre')[0].innerText.split('\n').map(x => {
var [d,m] = x.split(' ')
m = parseInt(m)
if (d === 'forward') {h+=m}
if (d === 'down') {v+=m}
if (d === 'up') {v-=m}
})
console.log(h,v)
console.log(h*v)




$$('pre')[0].innerText.split('\n')
var h=0, v = 0, nv = 0
var a = $$('pre')[0].innerText.split('\n').map(x => {
var [d,m] = x.split(' ')
m = parseInt(m)

if (d === 'forward') {nv += m*v;h+=m; }
if (d === 'down') {v+=m}
if (d === 'up') {v-=m}
})
console.log(h,v,nv)
console.log(h*nv)
