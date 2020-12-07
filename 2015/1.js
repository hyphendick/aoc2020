var a = $$('pre')[0].innerText.split('').map(e=>e==')' ? -1 :1);
a.reduce((acc,v,idx)=> {if (acc+v == -1) console.log(idx); return acc + v},0);
