const concatArray = (arr1, arr2) => [...arr1, ...arr2];

const sumOneToAll = (arr) => arr.map((n) => n + 1);

export { concatArray, sumOneToAll };
