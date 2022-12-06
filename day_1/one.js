const fs = require('node:fs');
const path = require('node:path');

// 1. find the elf carrieng the most calories and how much calories
// 2. find the sum of top 3 elf's total calories
let findMaxCalories = async () => {
  try{
    let file = await fs.readFileSync(path.resolve('./', 'input.txt'), { encoding: 'utf-8' });

    console.log(file.length);
    let sets = file.split('\n\n');
    let setIndex = 0;
    let max = Number.MIN_VALUE;
    let caloriArray = [];
    for(let set in sets){
      // let calories = set.split('\n');
      let totalCalories = 0;
      for(let calorie of sets[set].split('\n')){
        totalCalories += parseInt(calorie);
      }
      caloriArray.push(totalCalories);
    }
    caloriArray = caloriArray.sort((a, b) => a-b);

    let sum = caloriArray.at(caloriArray.length-1) + caloriArray.at(caloriArray.length-2) + caloriArray.at(caloriArray.length-3);
    console.log(sum);
  }
  catch(err){
    console.log(err);
  }
}

findMaxCalories();