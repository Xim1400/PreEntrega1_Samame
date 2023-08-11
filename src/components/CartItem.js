import React from 'react';

const CartItem = ({ item, onRemoveItem }) => {
  return (
    <li>
      {item.name} - ${item.price}
      <button onClick={() => onRemoveItem(item)}>Eliminar</button>
    </li>
  );
}

export default CartItem;
