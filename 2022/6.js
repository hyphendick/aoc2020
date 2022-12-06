

var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())
a = a[0]

const markerLength = 14
function isMarker(sequence) {
    let charMap = {}
    sequence.split('').map(x => charMap[x]=true)
    if (Object.keys(charMap).length == markerLength){
        return true
    }
    return false
}

for(let i =0 ;i< a.length-markerLength;i++) {
    if (isMarker(a.slice(i,i+markerLength))) {
        console.log( i+markerLength)
        break;
    }
}
