//a

prev = 20151125
for (i=1;i<17850354;i++) {
   prev = (prev*252533)%33554393
}
console.log(prev)
