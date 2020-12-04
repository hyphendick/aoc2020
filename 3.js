var a = $$('pre')[0].innerText.split('\n')
var ll = a[0].length
var cx = 0;
var cy = 0;
var treeCount = 0;

function advance() {
cx+=3    
if (cx >= ll) {
        cx =cx - ll
    } 
    cy++
}
function check() {
if (a[cy] && a[cy][cx] == '#') { treeCount++;}

}

while (cy < (a.length)) {
    advance();
    check();
}


function partB(run, rise) {
  var a = $$('pre')[0].innerText.split('\n')
  var ll = a[0].length
  var cx = 0;
  var cy = 0;
  var treeCount = 0;


  function advance() {
  cx+=run    
  if (cx >= ll) {
          cx =cx - ll
      } 
      cy +=rise
  }
  function check() {
  if (a[cy] && a[cy][cx] == '#') { treeCount++;}

  }

  while (cy < (a.length)) {
      advance();
      check();
  }

  console.log(treeCount);
  return treeCount;
}

partB(1,1) * partB(3,1) * partB(5,1) * partB(7,1) * partB(1,2)


Right 1, down 1.
Right 3, down 1. (This is the slope you already checked.)
Right 5, down 1.
Right 7, down 1.
Right 1, down 2.
