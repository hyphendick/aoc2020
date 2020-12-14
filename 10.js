var input = $$('pre')[0].innerText.split('\n')
input.pop()
input = input.map(parseFloat).sort((a,b) => a-b)


var m =[0,1,0,1];
input.reduceRight((a,c) => {
m[Math.abs(a-c)]++
return c;
})

console.log(m[1]*m[3])

var input = $$('pre')[0].innerText.split('\n')
input.pop()
input = input.map(parseFloat).sort((a,b) => a-b)
input.unshift(0)
input.push(input[input.length-1]+3)
