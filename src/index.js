
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) {return [];}
  let result = [];
  for (let i = 0; i < matrix.length; i++){
    let res = matrix[i];
    if (i % 2 == 0) {      
      for (let q = 0; q < res.length; q++) {
        result.push(res[q]);
      }
    }
    if (i % 2 != 0) {
      for (let q = res.length-1; q >= 0; q--) {
      result.push(res[q]);
    }
    }
    
  }  

  return result;
}
