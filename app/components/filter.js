import React from 'react';

class Filter extends React.Component {
  onFilterButtonClick() {
    const refs = this.refs;

    this.props.onFilterButtonClick(
      refs.color.value,
      refs.kind.value,
      refs.minPrice.value,
      refs.maxPrice.value,
      refs.newOnly.checked
    );
  }

  render() {
    const colorOptions = this.props.colors.map((color, index) => {
      return (
        <option value={index} key={index}>
          {color}
        </option>
      );
    });

    const kindOptions = this.props.kinds.map((kind, index) => {
      return (
        <option value={index} key={index}>
          {kind}
        </option>
      );
    });

    return (
      <div className="rarity_filter">
        <select className="rarity_filter--select" ref="color">
          <option value="-1">Цвет...</option>
          {colorOptions}
        </select>

        <select className="rarity_filter--select" ref="kind">
          <option value="-1">Вид...</option>
          {kindOptions}
        </select>

        <input className="rarity_filter--text_input" type="number" ref="minPrice" placeholder="Минимальная цена" />
        <input className="rarity_filter--text_input" type="number" ref="maxPrice" placeholder="Максимальная цена" />

        <input type="checkbox" ref="newOnly" id="new" />
        <label className="rarity_filter--label" htmlFor="new">Новинки</label>

        <button className="rarity_filter--button" onClick={::this.onFilterButtonClick}>Найти</button>
      </div>
    );
  }
}

export { Filter as default };
