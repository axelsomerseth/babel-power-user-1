"use strict";

var _arrayOperations = require("./modules/arrayOperations.js");

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log("\nArray #1: [".concat(arr1, "]"));
console.log("\nArray #2: [".concat(arr2, "]"));
var concatenated = (0, _arrayOperations.concatArray)(arr1, arr2);
console.log("\nConcatenated arrays (#1 + #2): ", concatenated);
var nPlusOne = (0, _arrayOperations.sumOneToAll)(arr1);
console.log("\nEvery element of Array #1 plus 1: ", nPlusOne);
console.log("\n");