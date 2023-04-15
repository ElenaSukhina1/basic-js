const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  } else{
  let arrSort = Array.from(arr)
  let newArr = []
  for (let i = 0; i < arrSort.length; i++) {
    if(arrSort[i] === '--double-next'){
      if(arrSort[i+1] === undefined){
        continue;
      }
      arrSort[i] = arrSort[i+1]
      newArr.push(arrSort[i])
    } else if(arrSort[i] === '--discard-prev'){
      newArr.splice(i-1,1)
    } else if(arrSort[i] === '--discard-next'){
      arrSort.splice(i,2)
    if(arrSort[i] === '--double-prev'){
      continue;
    }
    } else if (arrSort[i] === '--double-prev'){
      if(arrSort[i-1] === undefined){
        continue;
      } else{
      arrSort[i] = arrSort[i-1]
      newArr.push(arrSort[i])
      }
    } else{
      newArr.push(arrSort[i])
    }
  } return newArr
}
}


module.exports = {
  transform
};
