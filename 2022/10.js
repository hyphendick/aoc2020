var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())

let cycle = 1
let cycleOffset = 0
let xval = 1
let signalVal =0
let runningVals = []
let line =''
function cycleToCheck() {
    if (cycle === 20 || ((cycle-20)%40 === 0)) {
        signalVal += cycle*xval
        runningVals.push({c: cycle, v: xval})
        return true
    }
    let offsetCycle = cycle-cycleOffset
    let char = '░'
    if( xval == offsetCycle || (xval+1)=== offsetCycle || (xval+2)===offsetCycle) {
        char = '▓'
    }
    line+=char
    if ((offsetCycle%40) ===0) {
        cycleOffset+=40
        console.log(line)
        line=''
    }
}

function tick(op, val) {
    if(op === 'noop') {
        cycle++
        cycleToCheck()
    }
    if (op === 'addx') {
        cycle++
        cycleToCheck()
        cycle++
        xval += val
        cycleToCheck()
        
    }
}
cycleToCheck()
for(let i=0;i<a.length;i++) {
    let [op, val] = a[i].split(' ')
    val = parseInt(val)
    tick(op, val)
}

console.log(signalVal)
