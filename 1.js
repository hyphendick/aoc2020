$$('pre')[0].innerText.split('\n')
var a = $$('pre')[0].innerText.split('\n')
var o ={}
a.map(e => o[e]=true)
var b = a.filter(e => o[2020-e])
console.log(b[0]*b[1])

// eh 40k is small enough
var a = $$('pre')[0].innerText.split('\n')
var sumMap = {};
for (const s1 of a) {
    for(const s2 of a) {
        sumMap[parseInt(s1)+parseInt(s2)] = [s1,2]
    }
}

var c = a.filter(e=>sumMap[2020-e])
console.log(c[0] * c[1] * c[2])
