## new-error

Create Error Objects With String Formatting

```js
newError = require('new-error')

error = newError('There is no result for "{0}". Did you mean "{1}" ?', 'f00ar', 'foo bar')
error.message
// => There is no result for "f00ar". Did you mean "foo bar" ?

// Objects also can be passed.
newError('Invalid e-mail "{email}" and username "{username}"', { email: 'foo@foo', username: '!!!11' })
```

## Install

```bash
$ npm install new-error
```
