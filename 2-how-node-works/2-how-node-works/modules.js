// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1.js");
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports

const { add, multiply, divide } = require("./test-module-2.js");
console.log(add(2, 5));

// caching
require("./test-module-3.js")();
require("./test-module-3.js")();
require("./test-module-3.js")();
