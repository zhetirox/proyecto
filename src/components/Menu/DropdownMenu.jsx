import React, { useState } from 'react';
import './DropdownMenu.css';

function DropdownMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown-container">
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      {open && (
        <div className="dropdown-menu">
          <a href="#">Inicio</a>
          <a href="#">Rutas</a>
          <a href="#">Perfil</a>
          <a href="#">Cerrar sesión</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
