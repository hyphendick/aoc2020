var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())
let currentDir = []
let currentLine = 0;
let dirlist = []
class Directory {
    constructor(n,p){
        this.name = n
        this.files = []
        this.directories = []
        this.directoryMap = {}
        this.fileSize = 0;
        this.totalSize=0;
        this.parent = p;
    }
}

class File { 
    constructor(n, s) {
        this.name = n
        this.size = s
    }
}

let root = new Directory("/")
let currentNode = root
dirlist.push(root)
currentLine = 1;
function start(inp, dir) {
    while (currentLine < inp.length) {
        parseLine()
    }
}
function parseLine(line) {
    let args = line.split(' ')
    if(args[0] === '$'){
        parseCommand(args[1], args[2])
    } else {
        parseFile()
    }
}

function parseCommand(arg1,arg2) {
    if (arg1 === 'cd') {
        currentLine++;
        if (arg2  == '..') {
            currentDir.pop()
            currentNode = currentNode.parent
        } else {
            
            currentDir.push(arg2)
            currentNode = currentNode.directoryMap[arg2]
        }
    } else if (arg1 ==='ls') {
        currentLine++;
        parseList()
    }
}


function parseList() {
    let args = a[currentLine].split(' ')
    while (args[0] != '$' && currentLine < a.length ) {
        if(args[0] === 'dir') {
            d = new Directory(args[1],currentNode)
            dirlist.push(d)
            currentNode.directoryMap[args[1]] = d
            currentNode.directories.push(d)
        } else {
            f = new File(args[1], parseInt(args[0]))
            currentNode.files.push(f)
        }
        currentLine++
        if (currentLine >= a.length) {
            break;
        }
        args = a[currentLine].split(' ')
    }
}
currentLine = 1
while(currentLine < a.length) {
    parseLine(a[currentLine])
}

for(let k in dmap) {
    let v = dmap[k]
    for (let i = 0; i< v.files.length;i++) {
        v.fileSize += v.files[i].size
    }
}

function sumDirs(node) {
    let prt = false

    node.fileSize = 0
    for (let i = 0; i< node.files.length;i++) {
        node.fileSize += node.files[i].size
    }
    
    if (node.directories.length ===0) {
        node.totalSize += node.fileSize
        prt && console.log(`${node.name} filesum: ${node.totalSize}`)
        return node.totalSize
    }
    let dirSum = 0;
    for(let i=0 ; i< node.directories.length; i++) {
        dirSum += sumDirs(node.directories[i])
    }
    node.totalSize += (node.fileSize+dirSum)
    return node.totalSize 
}

sumDirs(root)
let dirs  = dirlist
let sum = 0;

for(let i = 0; i<dirs.length; i++) {
    if(dirs[i].totalSize <= 100000) {
        sum += dirs[i].totalSize
    }
}
console.log(sum)

let space = 70000000
let spaceNeeded = 30000000
let spaceAvail = space - root.totalSize
let spaceToFree = spaceNeeded - spaceAvail
let options = []
for (let i=0; i < dirlist.length; i++) {
    if (dirlist[i].totalSize >= spaceToFree) {
        options.push(dirlist[i])
    }
}
console.log(spaceAvail)
console.log(spaceToFree)
console.log(options.sort((a,b) => a.totalSize-b.totalSize))
