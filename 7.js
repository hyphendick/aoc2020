//uggo
var input = $$('pre')[0].innerText.split('\n')
input.pop()
let rules = {}
function parseLine(line) {
  line = line.split(' contain ');
  const children = parseChildren(line[1])
  let l = {
    keyColor:  line[0].slice(0,-5),
    children
  }
  return l
}

function parseChildren(line) {//console.log(line)
if (line == 'no other bags.')
    return null;
  let children = {}
  try{
  line = line.slice(0,-1).split(', ').map(e => {return {v: parseInt(e[0][0]),k:e[0][0] == 1 ? e.slice(2,-4): e.slice(2,-5)}}).map(c => children[c.k]=c.v)} catch{console.log(line)}
  return children
}

let output = input.map(l => {let p = parseLine(l); rules[p.keyColor] = {children: p.children}; return p;})

function search(key, idx) {
  searchTerm = 'shiny gold'
  if (!rules[key]) {
    return false
  }
  if (rules[key].children.searched == idx) {
    rules[key].children.hasGold = !!rules[key].children.hasGold;
    return rules[key].children.hasGold
  }
  if (rules[key].children[searchTerm]){
    rules[key].children.searched = idx; rules[key].children.hasGold=true;
    return true
   } else {
      rules[key].children.searched = idx;
      rules[key].children.hasGold=Object.keys(rules[key].children).map(c => search(c, idx)).reduce((c,v) => c||v,false)
      return  rules[key].children.hasGold
      
   }
  
}
function childrenHasGold(r) {
  if (!r.children) {
    return false}
 let found = false;
 Object.keys(r.children).forEach((c) =>  {
  if (rules[c] && rules[c].hasGold) {
   found = true
   }
 })
 //.reduce((c,v) => c||v,false)
 return found
}
let bags = 0;
Object.keys(rules).forEach((r,i) => { if(rules[r].children && rules[r].children['shiny gold'] || childrenHasGold(rules[r])) {rules[r].hasGold=true} })

function countChildren(parent) {

  if (!rules[parent].children){
      console.log(`${parent} is 1`)
      return 0;
      }
      
   console.log(Object.keys(rules[parent].children).map ( 
      c => {
      console.log(`${c} : ${rules[parent].children[c]} ${countChildren(c)} ${rules[parent].children[c] + rules[parent].children[c]*countChildren(c)} mult`)
        return rules[parent].children[c] + rules[parent].children[c]*countChildren(c)
        }).reduce((d,v) => d+v, 0))
   return Object.keys(rules[parent].children).map ( 
      c => {
        return rules[parent].children[c] + rules[parent].children[c]*countChildren(c)
        }).reduce ((d,v) => d+v,0)
}

countChildren('shiny gold')
