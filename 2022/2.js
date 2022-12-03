var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())

scoremap = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6
    
}
a.map(x=> scoremap[x]).reduce( (p,c) => p+c)



// pt 2 
var a = $$('pre')[0].innerText.split('\n').filter(x => x.trim())
scoremap = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7
    
}
a.map(x=> scoremap[x]).reduce( (p,c) => p+c)
