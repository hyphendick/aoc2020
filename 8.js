function getIn(){
var input = $$('pre')[0].innerText.split('\n')
input.pop()
input = input.map(e => {return {i: e.split(' ')[0], v: parseInt(e.split(' ')[1])}})
return input
}
let corder =[]

function run(input, useCorder){
let globalAcc = 0;
let pointer = 0;

let tc = 0;
let previous =0;
c = c.map(e => {e.checked = false; return e})
if(useCorder){
corder = []}
let ret = false
while(pointer >= 0 && pointer <  input.length) {
tc++;

if(tc> 100000000){break;}
   if(useCorder){ corder.push(input[pointer])}
if(input[pointer].checked) {
    console.log(globalAcc);
    console.log(`curr: ${pointer} prev; ${previous}`)
    console.log(tc);
    console.log ('---------')
    ret = true
break
    }

    switch (input[pointer].i) {
      case 'acc':
        globalAcc += input[pointer].v;
        input[pointer].checked=true;
        previous = pointer;
        pointer++; break;
       case 'nop':
        input[pointer].checked=true;
        previous = pointer;
        pointer++; break;
       case 'jmp':
        input[pointer].checked=true;
        previous = pointer;
        pointer = pointer + input[pointer].v
        break;   
    
    }
}

if (!ret) { console.log('finished'); console.log(globalAcc)}
return ret;
}

c = getIn()
run(c,true)
let corderCount = 0;
let cc = 0;

function flipCorder() {

if (corderCount > 0) {
if(corder[corderCount-1].i == 'jmp') {
    corder[corderCount-1].i = 'nop'
    } else if( corder[corderCount-1].i == 'nop') { corder[corderCount-1].i = 'jmp' }
}

  if(corder[corderCount].i == 'jmp') {
    corder[corderCount].i = 'nop'
    } else if( corder[corderCount].i == 'nop') { corder[corderCount].i = 'jmp' }

}
do 
 {

flipCorder()

corderCount++
cc++
if (cc >10000){console.log('timeout'); break;}

}while (run(c))
