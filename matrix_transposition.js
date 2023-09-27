// pair programing exercise week 2 day 2
const transpose = function(matrix) {

  // create a new empty array to store the answers
  let newColumnCount = (matrix.length - 1); //# of elements = new column of new matrix
  let newRowCount = (matrix[0].length - 1); //# of elements of sub arryay = new num of rows in new matrix

  // blank array to push
  const newArray = [];

  //new array to store values
  for (let i = 0; i <= newRowCount; i++) {
    // create new row to be pushed into final array
    const row = [];

    // being new loop to cycle through columns and pull the coresponding character into our row array
    for (let j = 0; j <= newColumnCount; j++) {
      row.push(matrix[j][i]);
    }

    // printMatrix(
    //   transpose([
    //     [1, 2],
    //     [3, 4],
    //     [5, 6],
    //   ])
    // );


    // 1 3 5
    // 2 4 6

    //add new row to the array
    newArray.push(row);
  }

  //return the new array
  return newArray;
};

module.exports = transpose;

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

// printMatrix(
//   transpose([
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//   ])
// );

// console.log("----");

// printMatrix(
//   transpose([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// );

// console.log("----");

// printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));

// desired results

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
// ----
// 1 3 5
// 2 4 6
// ----
// 1
// 2
// 3
// 4
// 5
// 6
// 7