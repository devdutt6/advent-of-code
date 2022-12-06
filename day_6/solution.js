exports.solution = (file) => {
  try{
    // write your solution here
    let len = file.length;
    // ?1
    // let arr = [file[0], file[1], file[2]];
    // ?2
    let arr = [file[0], file[1], file[2], file[3], file[4], file[5], file[6], file[7], file[8], file[9], file[10], file[11], file[12]];
    for( let i=13;i<len;i++ ){
      arr.push(file[i]);
      // ?part one
      // if( 14 === new Set(arr).size){
        // ?part two
        if( 14 === new Set(arr).size){
        return i+1;
      }
      arr.splice(0, 1);
    }
  }
  catch(err){
    console.log(err);
  }
};
