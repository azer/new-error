var format = require("format-text");

module.exports = newError;

function newError () {
  return new Error(format.apply(undefined, arguments));
}
