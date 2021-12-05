$$('pre')[0].innerText.split('\n')
var a = $$('pre')[0].innerText.split('\n')

class Board {
  
}
var draws ={}, sequentialDraws={}// createDraws(a[0])
//var sequentialDraws = createSequentialDraws(a[0])
createDraws()
var boards = createBoards(a.slice(2))

boards.map(calculateBoard)
boards.sort((b1,b2) => b1.winNumber-b2.winNumber)
console.log(boards)

console.log(calculateValue(boards[0],boards[0].winNumber))
console.log(calculateValue(boards[boards.length-1],boards[boards.length-1].winNumber))

function createDraws() {
   sequentialDraws = a[0].split(',').map(x => parseInt(x))
    sequentialDraws.map((n,idx) => {draws[n] = idx})
  console.log(`Draw map is: ${JSON.stringify(draws)}`);
  console.log(`Sequential Draws are  : ${sequentialDraws}`);
}

function createBoards(boards_inp){
  let _boards = []
  console.log('Creating Boards...')
  for (let start = 0,end = start+5;start<boards_inp.length;) {
   _boards.push(createBoard(boards_inp.slice(start,end)))
    start = start+6;
    end = start + 5
                
  }
  return _boards
}

function createBoard(board_inp){
  console.log(`**Creating Board for input ${JSON.stringify(board_inp)}`)
  let _board = new Board()
  _board.rows = []
  for(let i=0; i< board_inp.length;i++) {
    _board.rows.push(board_inp[i].split(' ').filter(x => x.trim()).map(x => parseInt(x)))
  }
  _board.cols = []
  for (let i =0, end=_board.rows.length; i < end; i++) {
    _board.cols.push ( _board.rows.map(r => {return r[i]}));  
  }
  console.log('===Rows')
  console.log(JSON.stringify(_board.rows))
  console.log('===Cols')
  console.log(JSON.stringify(_board.cols))
  return _board
  
}

function calculateBoard(board,idx) {
  let rowMoveNumbers = board.rows.map(calculateWinMoveNumber).sort()
  let colMoveNumbers = board.cols.map(calculateWinMoveNumber).sort()
  console.log(`Row Win numbers for board ${idx}: ${rowMoveNumbers[0]} -- ${rowMoveNumbers}`)
  console.log(`Col Win numbers for board ${idx}: ${colMoveNumbers[0]} -- ${colMoveNumbers}`)
  board.winNumber = rowMoveNumbers[0] < colMoveNumbers[0] ? rowMoveNumbers[0] : colMoveNumbers[0]
  console.log(`Board winning draw position ${board.winNumber}`)
  
}

function calculateWinMoveNumber(row) {
  console.log('****Calculating Move number for row: ', row)
  let moves = row.map(x => draws[x])
  console.log('****Row moves: ', moves)
  moves.sort((x,y)=> x-y)
  console.log(`****Sorted moves: ${moves}`)
  let winMoveNumber = moves[row.length-1]
  console.log('****Row wins on move: ', winMoveNumber)
 return winMoveNumber
}

function calculateValue(board, winMoveNumber) {
  let value = 0;
 board.rows.map(r => {
    r.map(num => {
      if (draws[num] > winMoveNumber) {
       value += num 
      }
    });
 }); 
  return value * sequentialDraws[winMoveNumber]
}
