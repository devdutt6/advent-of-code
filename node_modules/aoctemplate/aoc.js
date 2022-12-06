#!/usr/bin/env node
// importing required modules.
const { join } = require('node:path');
const { mkdirSync, openSync, appendFileSync } = require('node:fs');

// reading the folder name provided from cmd
let folder = process.argv[2] ?? "default_name";
// reading the process's absolute path
let path = join(process.cwd(), `${folder}`);

// creating the directory, input file and solution.js file
mkdirSync(path);
console.log(`Created directory ${folder}`);
openSync(join(path, `input.txt`), 'w');
console.log(`Created a input file ${folder}/input.txt`);
openSync(join(path, `solution.js`), 'w');
console.log(`Created a solution file ${folder}/solution.js`);
appendFileSync(join(path, `solution.js`),
`exports.solution = (file) => {
  try{
    // write your solution here
    for( let line of file ){
\t\t\t
    }
    // ? return @here;
  }
  catch(err){
    console.log(err);
  }
};
`);
console.log("Added the demo code...");
console.log("Template created successfully.");
console.log(`now\ncd into the folder ${folder}`);