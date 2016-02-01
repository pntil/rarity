import fs from 'fs';

import names from './data/names';
import colors from './data/colors';

const kinds = ['Земная пони', 'Единорог', 'Пегас', 'Аликорн'];
const FILENAME = 'model';

// TODO: Get this from helpers.js.
const pickNRandomElementsOfArray = (arr, n=1) => {
  let output = [];
  for (var i=0; i<n; i++) {
    let randomElem = arr[Math.floor(Math.random() * arr.length)];
    output.push(randomElem);
  }
  return output;
};

const generateCatalogue = () => {
  const model = names.map((name) => {
    return {
      name: name,
      color: pickNRandomElementsOfArray(actualColors)[0],
      kind: pickNRandomElementsOfArray(kinds)[0],
      price: +(Math.random() * 1980 + 20).toFixed(2),
      is_new: Math.random() > 0.9
    };
  });

  return model;
};

const actualColors = pickNRandomElementsOfArray(colors, 20);


const model = {
  catalogue: generateCatalogue(),
  colors: actualColors,
  kinds: kinds
};


fs.writeFile(
  FILENAME + '.json',
  JSON.stringify(model, null, 2),
  (err) => {
    if (err) return console.log(err);
    console.log(`${FILENAME}.json created.`);
  }
);
