import React from 'react';

const CartWidget = ({ cartItems, onShowCart }) => {
  return (
    <div className="cart-widget" onClick={onShowCart}>
      <div className="cart-icon">
        <span role="img" aria-label="Cart">&#128722;</span>
        {cartItems.length > 0 && <span className="cart-counter">{cartItems.length}</span>}
      </div>
    </div>
  );
}

export default CartWidget;
