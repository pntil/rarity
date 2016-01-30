import fs from 'fs';

import names from './data/names';
import colors from './data/colors';

const kinds = ['Земная пони', 'Единорог', 'Пегас', 'Аликорн'];
const FILENAME = 'model.json';

const pickRandomElementOfArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getPrice = () => {
  return +(Math.random() * 1980 + 20).toFixed(2);
};

const defineIfNew = () => {
  return Math.random() > 0.9;
};

const generateModel = () => {
  const model = names.map((name) => {
    return {
      name: name,
      color: pickRandomElementOfArray(colors),
      kind: pickRandomElementOfArray(kinds),
      price: getPrice(),
      is_new: defineIfNew()
    };
  });

  return model;
};

const model = generateModel();

fs.writeFile(
  FILENAME,
  JSON.stringify(model, null, 2),
  (err) => {
    if (err) return console.log(err);
    console.log(`${FILENAME} created.`);
  }
);
