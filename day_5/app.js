/**
    [H]         [D]     [P]
[W] [B]         [C] [Z] [D]
[T] [J]     [T] [J] [D] [J]
[H] [Z]     [H] [H] [W] [S]     [M]
[P] [F] [R] [P] [Z] [F] [W]     [F]
[J] [V] [T] [N] [F] [G] [Z] [S] [S]
[C] [R] [P] [S] [V] [M] [V] [D] [Z]
[F] [G] [H] [Z] [N] [P] [M] [N] [D]
 1   2   3   4   5   6   7   8   9
 */

const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');

let varGenerate = (line) => {
  line = line.split(' ');

  return {
    numberOfItems: parseInt(line[1]),
    from: parseInt(line[3]),
    to: parseInt(line[5])
  }
}

let changeInput = (input, {numberOfItems, from, to}) => {
  let len = input[from].length;
  // ?part two
  input[to] = input[to].concat(input[from].splice(len-numberOfItems));
  // ?part one
  for( let i=len;i>len - numberOfItems;i-- ){
    input[to].push(input[from].pop(i));
  }
  return input;
}

let findTop = async () => {
  try{
    let input = {
      1: ['W', 'T', 'H', 'P', 'J', 'C', 'F'],
      2: ['H', 'B', 'J', 'Z', 'F', 'V', 'R', 'G'],
      3: ['R', 'T', 'P', 'H'],
      4: ['T', 'H', 'P', 'N', 'S', 'Z'],
      5: ['D', 'C', 'J', 'H', 'Z', 'F', 'V', 'N'],
      6: ['Z', 'D', 'W', 'F', 'G', 'M', 'P'],
      7: ['P', 'D', 'J', 'S', 'W', 'Z', 'V', 'M'],
      8: ['S', 'D', 'N'],
      9: ['M', 'F', 'S', 'Z', 'D'],
    }

    for( let rows in input ){
      input[rows].reverse();
    }

    let file = readFileSync(resolve('./', 'input.txt'), { encoding: 'utf-8' });

    file = file.split('\n');

    for( let line of file ){
      input = changeInput(input, varGenerate(line));
    }

    for( let rows in input ){
      console.log(input[rows][input[rows].length-1]);
    }
  }
  catch(err){
    console.error(err);
  }
}

findTop();
// ? part one SPFMVDTZT
// ? part two ZFSJBPRFP