exports.solution = (file) => {
  try{
    let sum = 0;
    let count = 0;
    // ? part two
    while( count < file.length-1 ){
      let temp;
      let priorityValue;
      let arr = file[count].split('');
      count++;
      let arr2 = file[count].split('');
      count++;
      let arr3 = file[count].split('');
      count++;

      for(let character of arr){
        if( arr2.includes(character) && arr3.includes(character)){
          temp = character;
          break;
        }
      }
      console.log(temp);

      if( temp === temp.toLowerCase() ){
        priorityValue = temp.charCodeAt(0) - 96;
      }
      else{
        priorityValue = temp.charCodeAt(0) - 38;
      }

      sum += priorityValue;
    }

    return sum;
  }
  catch(err){
    console.log(err);
  }
};
