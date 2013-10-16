var newError = require("./");

it('creates a new error object with string formatting', function(){
  var err = newError('There is no result for "{0}". Did you mean "{1}" ?', 'f00ar', 'foo bar');
  expect(err.message).to.equal('There is no result for "f00ar". Did you mean "foo bar" ?');
});
