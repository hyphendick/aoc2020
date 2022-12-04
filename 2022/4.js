var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())

function checkline(line) {
    var [first, second] = line.split(',');
    let [firstLow, firstHigh] = first.split('-').map(x => parseInt(x))
    let [secondLow, secondHigh] = second.split('-').map(x=> parseInt(x))
   let firstSpan = firstHigh - firstLow
   let secondSpan = secondHigh- secondLow

    if (firstSpan> secondSpan) {
        if (secondLow >= firstLow && secondLow <= firstHigh && secondHigh <=firstHigh && secondHigh >= firstLow )
            return true
    } else {
        if (firstLow >= secondLow && firstLow <= secondHigh && firstHigh <=secondHigh && firstHigh >= secondLow )
            return true
    }

    return false
}


let out = a.map(checkline).filter(x => x)
console.log(out)


var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())

function checkline(line) {
    var [first, second] = line.split(',');
    let [firstLow, firstHigh] = first.split('-').map(x => parseInt(x))
    let [secondLow, secondHigh] = second.split('-').map(x=> parseInt(x))
   let firstSpan = firstHigh - firstLow
   let secondSpan = secondHigh- secondLow

    if (firstSpan> secondSpan) {
        if ((secondLow >= firstLow && secondLow <= firstHigh) || (secondHigh <=firstHigh && secondHigh >= firstLow ))
            return true
    } else {
        if ((firstLow >= secondLow && firstLow <= secondHigh) || (firstHigh <=secondHigh && firstHigh >= secondLow ))
            return true
    }

    return false
}


let out = a.map(checkline).filter(x => x)
console.log(out)
