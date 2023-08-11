import React, { useState } from 'react';
import Vehicle from './Vehicle';
import NavBar from './NavBar';
import CartWidget from './CartWidget';
import CartItem from './CartItem';

const ItemListContainer = ({ cartItems, onCategoryClick, onAddToCart }) => {
  const [vehicles, setVehicles] = useState([
    { id: 1, name: 'Lamborghini Aventador', description: 'Deportivo', price: 10000, image: 'images/vehicle1.png' },
    { id: 2, name: 'Mclaren Sanna', description: 'Deportivo', price: 15000, image: 'images/vehicle2.png' },
    { id: 3, name: 'Rolls-Royce Phantom V', description: 'Auto de lujo', price: 15000, image: 'images/vehicle3.png' },
    { id: 4, name: 'Kawasaki Ninja H2R', description: 'Deportivo', price: 15000, image: 'images/vehicle4.png' },
    { id: 5, name: 'Lamborghini Urus', description: 'Deportivo', price: 15000, image: 'images/vehicle5.png' },
    { id: 6, name: 'Maserati Levante 2021', description: 'Camioneta', price: 15000, image: 'images/vehicle6.png' }
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const filterVehiclesByCategory = (category) => {
    if (category) {
      return vehicles.filter(vehicle => vehicle.description === category);
    }
    return vehicles;
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryClick(category);
  };

  const handleAddToCart = (vehicle) => {
    setCart([...cart, vehicle]);
  };

  const handleRemoveItem = (itemToRemove) => {
    const updatedCart = cart.filter(item => item !== itemToRemove);
    setCart(updatedCart);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const filteredVehicles = filterVehiclesByCategory(selectedCategory);

  return (
    <div className="item-list-container">
      <NavBar onCategoryClick={handleCategoryClick} />
      <div className="cart-widget-container">
        <CartWidget cartItems={cart} onShowCart={toggleCart} />
        {showCart && (
          <div className="cart-popup">
            <h2>Carrito</h2>
            <ul>
              {cart.map((item, index) => (
                <CartItem key={index} item={item} onRemoveItem={() => handleRemoveItem(item)} />
              ))}
            </ul>
            {cart.length > 0 && (
              <div className="cart-total">
                Total: ${cart.reduce((total, item) => total + item.price, 0)}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="vehicle-list">
        {filteredVehicles.map(vehicle => (
          <Vehicle
            key={vehicle.id}
            name={vehicle.name}
            description={vehicle.description}
            price={vehicle.price}
            image={vehicle.image}
            onAddToCart={() => handleAddToCart(vehicle)}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;