import model from '../model.json';
import '../assets/styles.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Portal from './components/portal';
import Params from './components/params';
import List from './components/list';

import { pickNRandomFromArray } from './helpers';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: pickNRandomFromArray(props.model.catalogue, 20),
      isVisible: true
    };
  }

  onFilterButtonClick(color, kind, minPrice, maxPrice, newOnly) {
    const model = this.props.model;

    const filteredCatalogue = model.catalogue.filter((elem) => {
      return (!~color || elem.color == model.colors[color]) &&
             (!~kind || elem.kind == model.kinds[kind]) &&
             (!minPrice || elem.price >= minPrice) &&
             (!maxPrice || elem.price <= maxPrice) &&
             (!newOnly || elem.is_new);
    });

    this.setState({
      list: pickNRandomFromArray(filteredCatalogue, 20)
    });
  }

  toggleOverlay(event) {
    event.preventDefault();
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  componentDidMount() {
    this.props.a.addEventListener('click', ::this.toggleOverlay);
  }

  componentWillUnmount() {
    this.props.a.removeEventListener('click', this.toggleOverlay);
  }

  render() {
    const stopPropagation = (event) => {
      event.stopPropagation();
    };

    const overlayClassName = `rarity_overlay ${this.state.isVisible ? 'rarity_overlay--visible' : ''}`;

    return (
      <Portal className={overlayClassName} onClick={::this.toggleOverlay}>
        <div className="rarity_overlay--wrap" onClick={stopPropagation}>
          <Params colors={this.props.model.colors}
                  kinds={this.props.model.kinds}
                  onFilterButtonClick={::this.onFilterButtonClick} />

          <List list={this.state.list} />
        </div>
      </Portal>
    );
  }
}

const Overlay = function(aNode) {
  ReactDOM.render(
    <Filter model={model} a={aNode} />,
    document.querySelector('.react_dummy')
  );
};

new Overlay(document.querySelector('.rarity'));
