var a = $$('pre')[0].innerText.split('\n')

let yes=0;
let group = {}
for (line of a) {
  if (line == '') {
    yes = yes + Object.keys(group).length;
    group = {}
  } else {
    line.split('').map(q => group[q]=true)
  }

}
console.log(yes)


var a = $$('pre')[0].innerText.split('\n')

let yes=0;
let group = {}
let groupSize = 0;
for (line of a) {
  if (line == '') {
    yes = yes + Object.values(group).filter(v => v == groupSize).length;
    group = {}
    groupSize = 0;
  } else {
    line.split('').map(q => group[q]=group[q] && group[q]+1 || 1)
    groupSize++
  }

}
console.log(yes)


