var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())
let two = [[2]]
let six = [[6]]
let b =[two,six]
let pairs = []

for(let i=0;(i+1)< a.length;i=i+2) {

    let pair = {}
    pair[0] = JSON.parse(a[i])
    pair[1] = JSON.parse(a[i+1])
    b.push(pair[0])
    b.push(pair[1])
    pairs.push(pair)
}

function comparePair(obj) {
    let left = obj[0]
    let right = obj[1]
    let cmpVal =  {'continue': true, ordered: null}
//     console.log(`Comparing ${JSON.stringify(left)} vs ${JSON.stringify(right)}`)
    for (let i=0; (i <= left.length) && cmpVal.continue;i++) {
        if (i > 0 && cmpVal.ordered !== null) {
            return cmpVal
        }
        cmpVal = compare(left[i],right[i])
        
        console.log(`cmpVal  ${JSON.stringify(cmpVal)} for  ${JSON.stringify(left[i])} vs ${JSON.stringify(right[i])}`)
    }
    return cmpVal 
}

function compare(left,right,firstOnly) {
    
    let tleft = typeof(left)
    let tright = typeof(right)
//     console.log(`**Comparing ${JSON.stringify(left)} vs ${JSON.stringify(right)}`)
    if (tleft === 'number' && tright ==='number')  {
        if( left < right) {
            return {'continue': false, ordered: true}
        }
        if(left > right) {
            return {'continue': false, ordered: false}
        }
        return {'continue': true, ordered: null}
    }
    if ( false && firstOnly && tleft === 'object' && tright === 'object') {

        return compare(left[0], right[0])
    } else if(tleft === 'object' && tright === 'object') {
        return comparePair([left, right])
    }
       if (tleft === 'undefined' && tright === 'undefined') {
        return {'continue': true, ordered: null}
    }
    if (tleft !== 'undefined' && tright === 'undefined') {
        return {'continue': false, ordered: false}
    }
      if (tleft === 'undefined' && tright !== 'undefined') {

          return {'continue': false, ordered: true}

    }

    if (tleft !== 'object' && tright === 'object') {
        return compare([left],right,true)
    } else if (tleft === 'object' && tright !== 'object') {
        return compare(left, [right],true)
    }
    console.log(`un xpected type case ${tleft} ${tright}`)
}

m = pairs.map(comparePair).map(x => x.ordered)
console.log(m)
console.log(m.map((x,i) => x? i+1 :0).reduce((p,c) => p+c))

b.sort((x,y) => {
    let cmp = comparePair([x,y])
    return cmp.ordered? -1 : 0
})

b.map((x,i) =>  {
    if ((x === two) || (x ===six)) {
        return i+1
    }
    return 1;
}).reduce((p,c) => p*c,1)
