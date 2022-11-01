const getRatio = require("../ratio/index");
const getFactorial = require("../factorial/index");

function ratioAndFactorial(a, b, c) {
  const obj = {
    ratio: getRatio(a, b),
    factorial: getFactorial(c),
  };
  return obj;
}
module.exports = ratioAndFactorial;
