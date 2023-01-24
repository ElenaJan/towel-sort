module.exports = function towelSort (matrix) {
  let result = [];
  if(matrix !== undefined) {
    let newMatrix = [];
    for(let i = 0; i < matrix.length; i++) {
      if(i === 0 || i % 2 === 0) {
        newMatrix.push(matrix[i]);
      } else {
        let elem = matrix[i].reverse();
        newMatrix.push(elem);
      }
    }
    let arr = [];
    for(let i = 0; i < newMatrix.length; i++) {
      arr = arr.concat(newMatrix[i]);
    }
    result = arr.map((item) => Number(item))
  }
  return result;
}

// function towelSort (matrix) {
//   let newMatrix = [];
//   for(let i = 0; i < matrix.length; i++) {
//     if(i === 0 || i % 2 === 0) {
//       newMatrix.push(matrix[i]);
//     } else {
//       let elem = matrix[i].reverse();
//       newMatrix.push(elem);
//     }
//   }
//   let arr = [];
//   for(let i = 0; i < newMatrix.length; i++) {
//     arr = arr.concat(newMatrix[i]);
//   }
//   let result = arr.map((item) => Number(item))
//   return result;
// }

// const matrix = [
//   [1, 2, 4],
//   [5, 6, 7, 8],
//   [9, 12],
// ];

// towelSort(matrix);
