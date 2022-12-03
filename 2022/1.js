var cm = a.reduce((prev, cur) => {
if( isNaN(cur)){
    prev.elfnum = prev.elfnum+1
    return prev
}
    var c = prev.calorieMap[prev.elfnum]
    if(!c){
    prev.calorieMap[prev.elfnum] = cur
    } else {
    prev.calorieMap[prev.elfnum] +- cur
    }
return prev
  
  aa = Object.values(cm.calorieMap).sort((a,b)=>a-b)
