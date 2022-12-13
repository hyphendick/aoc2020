//lost the code this is what i found in the js console 

var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())

let monkeys = {}
let monkArr =[]
const WORRY_DIVIDE = 3
class Monkey {
    constructor(number, op, opNum, _testNum, tMonk,fMonk, _items) {
        this.inspectCount=0
        this.monkeyNum=number
        this.items = _items
        if(op === '*') {
            this.inspect = (num) => {
                let wval = Math.floor((num*opNum)/WORRY_DIVIDE)
                console.log(`Monkey ${number} inspecting ${num} got ${wval}`)
                return wval
            }
        } else if(op === 'sq') {
            this.inspect = (num) => {
                let wval = Math.floor((num*num)/WORRY_DIVIDE)
                console.log(`Monkey ${number} inspecting ${num} got ${wval}`)
                return wval
            }
        }else {
            this.inspect = (num) => {
                let wval =  Math.floor((num+opNum)/WORRY_DIVIDE)
                console.log(`Monkey ${number} inspecting ${num} got ${wval}`)
                return wval
            }
        }
        this.test = (num) => {
            if((num % _testNum) === 0) {
                monkeys[tMonk].items.push(num)
                console.log(`Monkey ${number} throwing ${num} to monkey ${tMonk}`)
            } else {
                monkeys[fMonk].items.push(num)
                console.log(`Monkey ${number} throwing ${num} to monkey ${fMonk}`)
            }
        }
    }

    toss() {
        for(let i=0; i<this.items.length;i++) {
            let item = this.items[i]
            let worry = this.inspect(item)
            this.test(worry)
            this.inspectCount++
        }
        this.items =[]
    }
}

for(let i=0;(i+5) < a.length;i+=6) {
    let num,op,opNum,testNum,tMonk,fMonk,items;
    num = parseInt(a[i].split(' ')[1].slice(0,1))
    op = a[i+2].split(' ')[6]
    opNum = parseInt(a[i+2].split(' ')[7])
    if (isNaN(opNum)) {
        op = 'sq'
    }
    testNum = parseInt(a[i+3].split(' ')[5])
    tMonk = parseInt(a[i+4].split(' ')[9])
    fMonk = parseInt(a[i+5].split(' ')[9])
    items = a[i+1].split(':')[1].split(',').map((x) => parseInt(x))
    let mky = new Monkey(num,op,opNum,testNum,tMonk,fMonk,items)
    monkArr.push(mky)
    monkeys[num] = mky
}
let numMonkeys = Object.keys(monkeys).length
for(let i=0; i < 20; i++) {
    
    for(j=0; j<numMonkeys;j++) {
        monkeys[j].toss()
    }
    
}

monkArr.sort((a,b) => a.inspectCount-b.inspectCount)

console.log(monkArr[numMonkeys-1].inspectCount*monkArr[numMonkeys-2].inspectCount)
