import React from 'react';

const NavBar = ({ onCategoryClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Xim Store</div>
      <ul className="navbar-categories">
        <li className="navbar-category" onClick={() => onCategoryClick(null)}>Todas</li>
        <li className="navbar-category" onClick={() => onCategoryClick('Deportivo')}>Deportivos</li>
        <li className="navbar-category" onClick={() => onCategoryClick('Auto de lujo')}>Autos de Lujo</li>
        <li className="navbar-category" onClick={() => onCategoryClick('Camioneta')}>Camionetas</li>
      </ul>
    </nav>
  );
};

export default NavBar;
