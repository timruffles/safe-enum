var enums = require("./safe-enum");
var assert = require("assert");

exports.dateFormats = enums("usUk", "uk", "long");
exports.dateFormatsFromObject = enums({
  "US_UK": "usUk",
  "UK": "gb"
});

assert.equal( exports.dateFormats("usUk"), "usUk");
assert.throws(function() {
  exports.dateFormats("uUk"); // Error
});

assert.equal( exports.dateFormatsFromObject("UK"), "gb");
