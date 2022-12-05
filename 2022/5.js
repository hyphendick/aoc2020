var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())


let stackInput = a.slice(0,8)
let moveInput=a.slice(9)

let stacks = []
let numStacks = (a[0].length+1)/4
for(let i=0;i<=numStacks;i++) {
    stacks.push([])
}
function parseLine(line) {
    for(let i = 0; i < numStacks;i++ ) {
        let idx = (i*4)+1;
        if (line[idx] != ' ') {
            stacks[i+1].push(line[idx])
        }
    }
}

for(let i=0; i<stackInput.length;i++) {
    parseLine(stackInput[i])
}

const regexpMoves = /move ([0-9]+) from ([0-9]+) to ([0-9]+)/;
for(let i=0; i < moveInput.length; i++) {
    const match = moveInput[i].match(regexpMoves);
    moveBlocks2(match[1],match[2],match[3])
}

function moveBlocks(numBlocks,from, to) {
    for(let i=0; i < numBlocks; i++) {
        let val = stacks[from].shift()
        stacks[to].unshift(val)
    }
}

function moveBlocks2(numBlocks,from, to) {
    let val = []
    for(let i=0; i < numBlocks; i++) {
        val.push(stacks[from].shift())
    }
    stacks[to].unshift(val)
    stacks[to] = stacks[to].flat()
}

let out = ''
for (let i=1;i<stacks.length;i++){
    out += stacks[i][0]
}
