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

    function validRange(val, min, max) {
        val = parseInt(val)
        if ( val>=min && val <=max) {
            return true;
        } console.log(`invalid range ${val} ${min} ${max}`)
        return false
    }
    function validHeight(height) {
        if (!height )
            return false
        var cm = height.match(/([0-9]+)cm$/);
        if (cm) {
            return validRange(cm[1],150,193)
        }
        var inch = height.match(/([0-9]+)in$/);
        if (inch) {
            return validRange(inch[1],59,76)
        }console.log(`iinvalid heigh ${height}`)
        return false
    }
    var eyeColors = {amb:true, blu:true, brn:true, gry:true, grn:true, hzl:true, oth:true}
    function validHair(hcl) {
        if (!hcl)
            return false
        if(hcl.match(/^\#[0-9a-f]{6}$/)) {
            return true;
        }console.log(`invalid hcl ${hcl}`)
        return false;
    }
    function validPid(pid) {
        if (!pid)
            return false
        if(pid.match(/^[0-9]{9}$/)) {
            return true;
        }console.log(`invalid pid ${pid}`)
        return false;
    }
        function validEye(eye) {
            if( eyeColors[eye]) 
                return true
            console.log(`invalid eye ${eye}`)
            return false;
            
        }
console.log(passport)
if ( validRange(passport['byr'],1920,2002) && validRange(passport['iyr'],2010,2020) && validRange(passport['eyr'],2020,2030) && validHeight(passport['hgt'])
    && validHair(passport['hcl']) && validEye(passport['ecl']) && validPid(passport['pid']))
    {
    valid++
}

}

function parseLine(l) {

  l = l.split(' ');

  var p = l.map(e => passport[e.split(':')[0]] = e.split(':')[1])

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

