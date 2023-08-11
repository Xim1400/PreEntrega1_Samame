import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  // Función para manejar el evento de añadir al carrito
  const handleAddToCart = (vehicle) => {
    // Agregar el vehículo al carrito
    console.log('Añadir al carrito:', vehicle);
  };

  // Función para manejar el evento de clic en una categoría
  const handleCategoryClick = (category) => {
    console.log('Filtrar por categoría:', category);
  };

  return (
    <div className="App">
      <NavBar onCategoryClick={handleCategoryClick} />
      <ItemListContainer onCategoryClick={handleCategoryClick} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
