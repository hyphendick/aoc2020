var ob = {};
'abcdefghijklmnopqrstuvwxyz'.split('').map((x, i) => ob[x] = i + 1)
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((x, i) => ob[x] = i + 27)


var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())

function split(line) {
    var length = line.length;
    var first = line.slice(0, length / 2)
    var second = line.slice(length / 2, length)
    var checkmap = {}
    first.split('').map((x) => {
        checkmap[x] = true
    })
    var dupe = second.split('').map((x) => {
        if (checkmap[x]) {
            return x
        }
    }).filter(x => x)
    return ob[dupe[0]]
}

var ans = a.map((x) => split(x)).reduce((p, c) => p + c)


// pt 2

var ob = {};
'abcdefghijklmnopqrstuvwxyz'.split('').map((x, i) => ob[x] = i + 1)
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((x, i) => ob[x] = i + 27)


var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())
var groupTotal = 0
for (let i = 0; i <= a.length - 3; i = i + 3) {
    let checkmap = {}
    a[i].split('').map((x) => {
        checkmap[x] = true
    })
    a[i + 1].split('').forEach((x) => {
        if (checkmap[x]) checkmap[x] = 2
    })
    a[i + 2].split('').forEach((x) => {
        if (checkmap[x] == 2) checkmap[x] = 3
    })
    groupTotal += ob[Object.entries(checkmap).filter((x) => x[1] == 3)[0][0]]
}
console.log(groupTotal)
