
module.exports = function towelSort (matrix) {
  let arr1 = [];
  if(matrix.length ===0){
    return arr1
  }else{
    for(let i=0;i<matrix.length;i++){
      if(i%2===0){
        for(let j=0;j<matrix[i].length;j++){
          arr1.push(matrix[i][j]);
        }
        }else{
          for(let k=matrix[i].length-1;k>=0;--k){
            arr1.push(matrix[i][k]);
          }
      }
     }
      return arr1
  }
  
}
