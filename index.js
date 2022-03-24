import { concatArray, sumOneToAll } from './modules/arrayOperations.js';

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const unionArrays = concatArray(arr1, arr2); 
console.debug(`Concatenated arrays: [${unionArrays}]`);

const plusOne = sumOneToAll(arr1);
console.debug(`Array #1 with every element plus 1: [${plusOne}]`);
