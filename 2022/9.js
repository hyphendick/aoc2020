var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())

let tarray = [{x: 0, y:0}]
let tmap={}
let harray = [{x: 0, y:0}]

let tX = [{tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}}]
function calculateMove(direction, distance){
    for(let i=0;i< distance; i++) {
        currentH = Object.assign({}, harray[harray.length-1])
        switch(direction) {
            case 'R':
                currentH.x++;
                harray.push(currentH);
                break;
            case 'L':
                currentH.x--;
                harray.push(currentH);
                break;
            case 'U':
                currentH.y++;
                harray.push(currentH);
                break;
            case 'D':
                currentH.y--;
                harray.push(currentH);
                break;
        }
        updateT()
    }
}
function updateT() {
    currentH = harray[harray.length-1]
    currentT = Object.assign({},tarray[tarray.length-1])
    
    let xdist = currentH.x - currentT.x
    let ydist = currentH.y - currentT.y
    let abx = Math.abs(xdist), aby= Math.abs(ydist)
    if (abx<=1 && aby<=1) {
        return;
    }
    if(abx === 0) {
        currentT.y+= (ydist/2)
        tarray.push(currentT)
        tmap[`${currentT.x}-${currentT.y}`]=true
        return
    }
    if (aby === 0) {
        currentT.x+= (xdist/2)
        tarray.push(currentT)
        tmap[`${currentT.x}-${currentT.y}`]=true
        return
    }
    
    if (aby>abx) {
        currentT.x+=xdist
        currentT.y+= (ydist/2)
        tarray.push(currentT)
        tmap[`${currentT.x}-${currentT.y}`]=true
        return
    }
    if (abx>aby) {
        currentT.y+=ydist
        currentT.x+= (xdist/2)
        tarray.push(currentT)
        tmap[`${currentT.x}-${currentT.y}`]=true
        return
    }
    
}
tmap['0-0']=true
for(let i =0;i<a.length;i++) {
    let [dir,dist] = a[i].split(' ')
    calculateMove(dir,parseInt(dist))
}
console.log(Object.keys(tmap).length)
console.log(tarray.length)

//pt2



var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())

let tX = [{tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}},
          {tarray: [{x: 0, y:0}], tmap: {'0-0': true}}]
let run,a1,a2
function calculateMove(direction, distance, harray){
    
    for(let i=0;i< distance; i++) {
        a1=i
        currentH = Object.assign({}, harray[harray.length-1])
        switch(direction) {
            case 'R':
                currentH.x++;
                harray.push(currentH);
                break;
            case 'L':
                currentH.x--;
                harray.push(currentH);
                break;
            case 'U':
                currentH.y++;
                harray.push(currentH);
                break;
            case 'D':
                currentH.y--;
                harray.push(currentH);
                break;
        }
        updateTs(harray)
        
    }
}

function updateTs(initH) {
    
    let harray=initH
    
    for(let i =0;i< tX.length;i++) {
         
        let {tarray,tmap} = tX[i]
        updateT(tarray,harray,tmap,i+1,i)
        harray=tX[i].tarray
    }
    
}
function updateT(tarray,harray,tmap,t,h) {
    currentH = harray[harray.length-1]
    currentT = Object.assign({},tarray[tarray.length-1])
    
    let xdist = currentH.x - currentT.x
    let ydist = currentH.y - currentT.y
    let abx = Math.abs(xdist), aby= Math.abs(ydist)
    if (abx<=1 && aby<=1) {
        return;
    }

    if(abx === 0) {
        currentT.y+= (ydist/2)
        tarray.push(currentT)
        tmap[`${currentT.x}-${currentT.y}`]=true
        return
    }
    if (aby === 0) {
        currentT.x+= (xdist/2)
        tarray.push(currentT)
        tmap[`${currentT.x}-${currentT.y}`]=true
        return
    }
    

    currentT.x+=Math.ceil(abx/2)*Math.sign(xdist)
    currentT.y+= Math.ceil(aby/2)*Math.sign(ydist)
    tarray.push(currentT)
    tmap[`${currentT.x}-${currentT.y}`]=true
    return
}

let hgarray = [{x: 0, y:0}]
for(let i =0;i<a.length;i++) {
    run = i
    let [dir,dist] = a[i].split(' ')
    calculateMove(dir,parseInt(dist),hgarray)
}
console.log(Object.keys(tX[8].tmap).length)
console.log(tX[8].tarray.length)
