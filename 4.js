/*byr (Birth Year)
iyr (Issue Year)
eyr (Expiration Year)
hgt (Height)
hcl (Hair Color)
ecl (Eye Color)
pid (Passport ID)
cid*/
var a = $$('pre')[0].innerText.split('\n')
var temp = []
var passport = {}
var valid = 0;

function validatePassport() {
console.log(temp)
temp.map(e => passport[e]=true)
console.log(passport)
if ( passport['byr'] && passport['iyr'] && passport['eyr'] && passport['hgt']
    && passport['hcl'] && passport['ecl'] && passport['pid'])
    {
    valid++
}

}

function parseLine(l) {

  l = l.split(' ');
  console.log(l)
  var p = l.map(e => e.split(':')[0])
  console.log(p)
  return p
}

for(var i = 0; i<a.length;i++){
  
  if (a[i] == "") {
    validatePassport()
    temp = []; passport = {}
  } else {
 temp = temp.concat(parseLine(a[i])) 
    
  }

}
console.log(valid)
