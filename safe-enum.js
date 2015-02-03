module.exports = exports = safeEnum;

function safeEnum(setup) {
  if(arguments.length === 1 && typeof setup === "object") {
    // done
  } else {
    setup = [].reduce.call(arguments, function(h, v) {
      h[v] = v;
      return h;
    }, {});
  }
  return constantGetter(setup);
}

function constantGetter(opts) {
  var valid = Object.keys(opts).join(", ");
  return function constantGet(k) {
    if(k in opts) {
      return opts[k];
    } else {
      throw new Error("Invalid enum value '" + k + "', valid options: " + valid);
    }
  }
}
