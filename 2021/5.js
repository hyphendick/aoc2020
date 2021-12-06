$$('pre')[0].innerText.split('\n')
var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())
let ptmap = {}
let allpts = a.map(z => z.split('->').map(x => x.trim()).map(x => x.split(',')).map(x => {return {x: parseInt(x[0]),y:parseInt(x[1])}}))

allpts.forEach(pt => {
iterate(pt)
})

console.log(ptmap)
console.log(Object.values(ptmap).filter(x => x>1))
console.log(Object.values(ptmap).filter(x => x>1).length)
function iterate(pts) {
  console.log(`Processing ${JSON.stringify(pts)}`)
 if (pts[0]['x'] === pts[1]['x']) {
   iterateY(pts, pts[0]['x'])
 } else if (pts[0]['y'] === pts[1]['y']) {
      iterateX(pts, pts[0]['y'])
 } else {
  iterateDiag(pts) 
 }
}

function iterateDiag(pts) {
 let steps = Math.abs(pts[0]['x']-pts[1]['x'])
 let deltaX = -(pts[0]['x']-pts[1]['x'])/steps
 let deltaY = -(pts[0]['y']-pts[1]['y'])/steps

 for(let step =0, x=pts[0]['x'], y = pts[0]['y']; step<=steps; step++) {
  addPt(x,y);
   x += deltaX
   y += deltaY
 }
}
function iterateX(pts, y){
  let lowerX, upperX
  if (pts[0]['x'] < pts[1]['x']) {
    lowerX = pts[0]['x']
    upperX = pts[1]['x']
  } else {
    lowerX = pts[1]['x']
    upperX = pts[0]['x']
  }
  for (;lowerX<=upperX;lowerX++) {
   addPt(lowerX,y) 
  }
   
}

function iterateY(pts, x){
  let lowerY, upperY
  if (pts[0]['y'] < pts[1]['y']) {
    lowerY = pts[0]['y']
    upperY = pts[1]['y']
  } else {
    lowerY = pts[1]['y']
    upperY = pts[0]['y']
  }
  for (;lowerY<=upperY;lowerY++) {
   addPt(x,lowerY) 
  }
   
}

function addPt(x,y) {
 let pt = ptmap[`${x},${y}`]
  if (!pt) {
    ptmap[`${x},${y}`] = 1 
  }
  else {
   ptmap[`${x},${y}`] = ptmap[`${x},${y}`] +1
  }
}
