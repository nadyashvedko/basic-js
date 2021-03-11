const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)) {
      let newArr = [];
      members.map((el) => {
          if (typeof el === 'string') {
              newArr.push(el.trim().substr(0, 1).toUpperCase());
          }
      })
      return newArr.sort().toString().split(',').join('');
  }
  return false;
};
