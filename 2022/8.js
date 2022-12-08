var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())
a = a.map((x) => x.split('').map((y) => parseInt(y)))
let height = a.length*2
let width = (a[0].length - 2)*2
let outer = height + width

let shadow = new Array(a.length).fill('')
shadow = shadow.map(() => (new Array(a[0].length)).fill(false))

function visibleLeft(line,shadowLine) {
    currentMax=line[0];
    maxPos=0;
    visibleCount=0;
    for(let i=1; i<line.length-1;i++) {
        if (line[i] > currentMax) {
            visibleCount++;
            maxPos=i
            currentMax = line[i]
            shadowLine[i] = true
            
        }
    }
}

function visibleRight(line,shadowLine) {
    currentMax=line[line.length-1];
    maxPos=line.length;
    visibleCount=0;
    for(let i=line.length-1; i>0;i--) {
        if (line[i] > currentMax) {
            visibleCount++;
            maxPos=i
            currentMax = line[i]
            shadowLine[i] = true
        }
    }
}


function visibleTop(inp, col) {
    currentMax=inp[0][col];
    maxPos=0;
    visibleCount=0;
    for(let i=1; i<inp.length-1;i++) {
        if (inp[i][col] > currentMax) {
            visibleCount++;
            maxPos=i
            currentMax = inp[i][col]
            shadow[i][col] = true
        }
    }
}

function visibleBottom(inp, col) {
    currentMax=inp[inp.length-1][col];
    for(let i=inp.length-1; i>0;i--) {
        if (inp[i][col] > currentMax) {
            
            currentMax = inp[i][col]
            shadow[i][col] = true
        }
    }
}

for (let i = 1; i < a.length-1;i++) {
    visibleLeft(a[i],shadow[i])
    visibleRight(a[i],shadow[i])
}

for (let i = 1; i < a.length-1;i++) {
    visibleTop(a,i)
    visibleBottom(a,i)
}

console.log(outer + shadow.map((x) => 
x.filter((y) => y).length
).reduce((p,c) => p+c,0))

function lscore(x,y) {
    let score=1
    for(let i=y-1; i>0; i--){
        if(a[x][i] >= a[x][y]){
            return score
        }
        score++
    }
    return score
}
function rscore(x,y) {
    let score=1
    for(let i=y+1; i < line.length-1; i++){
        if(a[x][i] >= a[x][y]){
            return score
        }
        score++
    }
    return score
}
function tscore(x,y) {
    let score=1
    for(let i=x-1; i > 0; i--){
        if(a[i][y] >= a[x][y]){
            return score
        }
        score++
    }
    return score
}
function bscore(x,y) {
    let score=1
    for(let i=x+1; i < shadow.length-1; i++){
        if(a[i][y] >= a[x][y]){
            return score
        }
        score++
    }
    return score
}
let highest = 0;
for(let i=0; i<a.length; i++) {
    let line = shadow[i]
    for(let j = 0; j< line.length; j++) {
        if (line[j]) {
            let [l,r,t,b] = [lscore(i,j), rscore(i,j), tscore(i,j), bscore(i,j)]
            
            let score = l*r*t*b
            if (score > highest ){
                highest = score
            }
        }
    }
}
console.log(highest)
