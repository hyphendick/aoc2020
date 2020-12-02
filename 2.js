var a = $$('pre')[0].innerText.split('\n')

function parse(l) {
var p = l.split(' ');
p[1] = p[1][0]
var t = p[0].split('-')
p[0] = t[1]
p.unshift(t[0])
return p;
}

function check(c) {
var r = c[3].replaceAll(c[2],'')
var count = c[3].length-r.length
if (count >= c[0] && count <=c[1]) { return true}
return false
}

a.map(parse).filter(check).length



function check2(c) {
if(c[3][c[0]-1] == c[2] && c[3][c[1]-1] == c[2]) {return false}
if(c[3][c[0]-1] == c[2] || c[3][c[1]-1] == c[2]) {return true}
return false
}


a.map(parse).filter(check2).length
