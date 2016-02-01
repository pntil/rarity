import React from 'react';

const List = (props) => {
  const rows = props.list.map((elem, index) => {
    return (
      <div className="rarity_catalogue--row" key={index}>
        <div className="rarity_catalogue--cell">{elem.name}</div>
        <div className="rarity_catalogue--cell">{elem.color}</div>
        <div className="rarity_catalogue--cell">{elem.kind}</div>
        <div className="rarity_catalogue--cell rarity_catalogue--cell-price">{elem.price}</div>
        <div className="rarity_catalogue--cell">{elem.is_new ? 'Новинка' : null}</div>
      </div>
    );
  });
  return (
    <div className="rarity_catalogue">
      {rows}
    </div>
  );
};

export { List as default };
