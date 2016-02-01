export function pickNRandomFromArray(arr, n=1) {
  let output = [];

  for (var i=0; i<n && i<arr.length; i++) {
    let randomElem = arr[Math.floor(Math.random() * arr.length)];
    output.push(randomElem);
  }

  return output;
};
