export function pickNUniqueRandomFromArray(arr, n=1) {
  if (arr.length <= n) return arr;

  let output = [];
  let initialArrLength = arr.length;

  arr = arr.slice();

  for (var i=0; i<n && i<initialArrLength; i++) {
    let randomElemIndex = ~~(Math.random() * arr.length);
    output.push(arr[randomElemIndex]);
    arr.splice(randomElemIndex, 1);
  }

  return output;
};
