import React from 'react';

const Vehicle = ({ name, description, price, image, onAddToCart }) => {
  return (
    <div className="vehicle">
      <div className="vehicle-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="vehicle-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Precio: {price}</p>
        <button onClick={onAddToCart}>Añadir al carrito</button>
      </div>
    </div>
  );
}

export default Vehicle;
