const fs = require('node:fs');
const path = require('node:path');

let MOVE_POINT = {
  ROCK: 1,
  PAPER: 2,
  SCISSOR: 3
};

let RESULT_POINT = {
  LOSS: 0,
  DRAW: 3,
  WIN: 6
}

let getScore = (opp, myp) => {
  let sum = 0;
  switch(opp){
    case ('A'):
      if( myp === 'X' ){ //loss
        sum += RESULT_POINT.LOSS + MOVE_POINT.SCISSOR;
      }
      else if( myp === 'Y' ){//draw
        sum += RESULT_POINT.DRAW + MOVE_POINT.ROCK;
      }
      else{//win
        sum += RESULT_POINT.WIN + MOVE_POINT.PAPER;
      }
      break;
    case ('B'):
      if( myp === 'X' ){ //loss
        sum += RESULT_POINT.LOSS + MOVE_POINT.ROCK;
      }
      else if( myp === 'Y' ){//draw
        sum += RESULT_POINT.DRAW + MOVE_POINT.PAPER;
      }
      else{//win
        sum += RESULT_POINT.WIN + MOVE_POINT.SCISSOR;
      }
      break;
    case ('C'):
      if( myp === 'X' ){ //loss
        sum += RESULT_POINT.LOSS + MOVE_POINT.PAPER;
      }
      else if( myp === 'Y' ){//draw
        sum += RESULT_POINT.DRAW + MOVE_POINT.SCISSOR;
      }
      else{//win
        sum += RESULT_POINT.WIN + MOVE_POINT.ROCK;
      }
      break;
  }
  return sum;
}

let checkScore  = async () => {
  try{
    let results = fs.readFileSync(path.resolve('./', 'input.txt'), { encoding: 'utf-8' });

    results = results.split('\n');

    // console.log(results.length);
    let sum = 0;
    results.map((result) => {
      let arr = result.split(' ');

      sum += getScore(arr[0], arr[1])
    });

    console.log(sum);
  }
  catch(err){
    console.error(err);
  }
}

checkScore();