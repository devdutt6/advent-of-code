let range = (start, end) => {
  start = parseInt(start);
  end = parseInt(end);
  let arr = [];
  for(let i=start;i<=end;i++){
    arr.push(i);
  }
  return arr;
}

exports.solution = (file) => {
  try{
    let count = 0;
    // console.log(file[0].split('\r'));
    for(let pair of file){
      pair = pair.split('\r')[0].split(',');
      let first_elf = pair[0].split('-'); // [2, 5]
      let second_elf = pair[1].split('-'); // [6, 8]

      let arr = range(first_elf[0], first_elf[1]);
      let arr2 = range(second_elf[0], second_elf[1]);

      let aset = new Set(arr.concat([...arr2]));

      // ? part 1
      if( aset.size === Math.max(arr.length, arr2.length)){
        count += 1;
        // console.log(pair);
      }
      // ? part 2
      // if( aset.size !== (arr.length + arr2.length)){
      //   count += 1;
      //   console.log(pair);
      // }
    }

    // console.log(count);
    return count;
  }
  catch(err){
    console.log(err);
  }
};
