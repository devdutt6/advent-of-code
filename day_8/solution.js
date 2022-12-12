let checkLeft = ( x, y ) => {
  let counter = 0;
  while(counter < x){
    if( file[x][counter] >= file[x][y] ) return false;
    counter++;
  }
  return true;
}
let checkRight = ( x, y ) => {
  let counter = x + 1;
  while(counter <= maxcol){
    if( file[x][counter] >= file[x][y] ) return false;
    counter++;
  }
  return true;
}
let checkTop = ( x, y ) => {
  let counter = 0;
  while(counter < y){
    if( file[counter][y] >= file[x][y] ) return false;
    counter++;
  }
  return true;
}
let checkBottom = ( x, y ) => {
  let counter = y + 1;
  while(counter <= maxrow ){
    if( file[counter][y] >= file[x][y] ) return false;
    counter++;
  }
  return true;
}

let globalCheck = (file, rowCounter, colCounter, row, column) => {
  let file = file;
  let maxrow = row;
  let maxcol = column;
  if( checkLeft(rowCounter, colCounter) || checkRight(rowCounter, colCounter) || checkTop(rowCounter, colCounter) || checkBottom(rowCounter, colCounter) ){
    return true;
  }
  return false;
}

exports.solution = (file) => {
  try{
    // write your solution here
    let row = file.length - 1;
    let column = file[0].split('').length - 1;
    let count =  row + column;
    // console.log("started counter", count, row, column);
    for( let line in file ){
      file[line] = file[line].split('').map(elem => parseInt(elem));
    }
    // console.log("file updated");

    let rowCounter = 1;
    while( rowCounter < row ){
      let colCounter = 1;
      while( colCounter < column ){
        if( globalCheck(file, rowCounter, colCounter, row, column) ){
          count++;
        }
        colCounter++;
      }
      rowCounter++;
    }
    return count;
  }
  catch(err){
    console.log(err);
  }
};
