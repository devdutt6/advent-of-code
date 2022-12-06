#!/usr/bin/env node
// importing required modules.
const { join } = require('node:path');
const { readFileSync } = require('node:fs');

// reading absolute path of directory in which process is being executed.
let path = process.cwd();
// requiring the solution from solution file.
try{
  const { solution } = require(join(path, 'solution.js'));
  console.log("Starting the execution..");
  console.log("====================================================");
  console.time('Elapsed');
  // anonymous function
  (async () => {
    try{
      // reading and spliting the file according to spliting characted
      let file = readFileSync(join(path, 'input.txt'), { encoding: 'utf-8' }).split(process.argv[2] ?? '\n');
      // loggging the solution
      console.log(await solution(file));
    }
    catch(err){
      // if error
      console.log(err);
    }
  })();
  console.log("====================================================");
  console.timeEnd('Elapsed');
}
catch(err){
  console.error(err);
}
