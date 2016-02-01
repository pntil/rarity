'use strict';

const fs = require('fs');
const path = require('path');

const names = require('./data/names');
const colors = require('./data/colors');
const kinds = ['Земная пони', 'Единорог', 'Пегас', 'Аликорн'];

const filename = path.join(__dirname, '../example', 'model.json');

const pickNRandomElementsOfArray = function(arr, n) {
  let output = [];
  for (var i=0; i<n; i++) {
    let randomElem = arr[Math.floor(Math.random() * arr.length)];
    output.push(randomElem);
  }
  return output;
};

const generateCatalogue = function() {
  const model = names.map(function(name) {
    return {
      name: name,
      color: pickNRandomElementsOfArray(actualColors, 1)[0],
      kind: pickNRandomElementsOfArray(kinds, 1)[0],
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
  filename,
  JSON.stringify(model, null, 2),
  function(err) {
    if (err) return console.log(err);
    console.log(`${filename} created.`);
  }
);
