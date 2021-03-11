const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const cat = '^^';
  let counter = 0;
  const arr = matrix.forEach((items) => {
    let newArray = items.filter(item => item === cat);
    counter+= newArray.length;
  });
  return counter;
};

