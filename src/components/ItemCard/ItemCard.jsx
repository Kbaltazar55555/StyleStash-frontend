import React from 'react';
import './ItemCard.css'

const ItemCard = ({ item, handleItemSelect }) => {
  return (
    <div className='item-card' onClick={() => handleItemSelect(item._id)}>
      <h1>{item.type}</h1>
      <h1>{item.brand}</h1>
    </div>
  );
};

export default ItemCard;
