import React from 'react';

class Params extends React.Component {
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
      <div>
        <select ref="color">
          <option value="-1">Цвет...</option>
          {colorOptions}
        </select>

        <select ref="kind">
          <option value="-1">Вид...</option>
          {kindOptions}
        </select>

        <input type="number" ref="minPrice" placeholder="Минимальная цена" />
        <input type="number" ref="maxPrice" placeholder="Максимальная цена" />

        <label htmlFor="new">Новинки</label>
        <input type="checkbox" ref="newOnly" id="new" />

        <button onClick={::this.onFilterButtonClick}>Найти</button>
      </div>
    );
  }
}

export { Params as default };
