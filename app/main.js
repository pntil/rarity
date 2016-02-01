import model from '../example/model.json';
import './assets/styles.less';

import React from 'react';
import ReactDOM from 'react-dom';
import Rarity from './components/Rarity';

const initRarity = function(aNode) {
  ReactDOM.render(
    <Rarity model={model} a={aNode} />,
    document.querySelector('.react_dummy')
  );
};

initRarity(document.querySelector('.rarity_toggle'));
