//part 1
$$('pre')[0].innerText.split('\n')
var a = $$('pre')[0].innerText.split('\n')
a.map((x,i) => {return a[i+1]-a[i]}).filter(x=>x >0).length
