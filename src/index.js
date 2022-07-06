import { concatArray, sumOneToAll } from "./modules/arrayOperations.js";

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(`\nArray #1: [${arr1}]`);
console.log(`\nArray #2: [${arr2}]`);

const concatenated = concatArray(arr1, arr2);
console.log("\nConcatenated arrays (#1 + #2): ", concatenated);

const nPlusOne = sumOneToAll(arr1);
console.log("\nEvery element of Array #1 plus 1: ", nPlusOne);
console.log("\n");
