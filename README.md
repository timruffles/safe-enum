# Safe Enum

Define enums as a getter function, so you'll get descriptive runtime exceptions not `undefined`
if you make a typo.

```javascript
var enums = require("safe-enum");

exports.dateFormats = enums("usUk", "uk", "long");
exports.dateFormatsFromObject = enums({
  "US_UK": "usUk",
  "UK": "gb"
});

exports.dateFormats("usUk"); // usUk
exports.dateFormats("uUk"); // Error

exports.dateFormatsFromObject("UK"); // 'gb'
```

This is for constants you'll expose in a module - for internal constants, it's easier to
define as `var SOME_CONSTANT = 'blah'` and use `jshint` to references to undeclared variables.

## Install

```sh
npm i -S safe-enum
```

```javascript

```

