var format = require("new-format");

module.exports = newError;

function newError () {
  return new Error(format.apply(undefined, arguments));
}
