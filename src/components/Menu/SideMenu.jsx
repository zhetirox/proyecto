import  { React,useState } from 'react';
import './SideMenu.css';

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);



  return (
    <>

      <button className="menu-toggle" onClick={toggleMenu}>☰</button>


      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
   
        <button className="close-btn" onClick={closeMenu}>✕</button>

        <div className="menu-blue-top"></div>

        <div className="profile-section">
          <img src="https://cdn-icons-png.flaticon.com/512/4645/4645949.png" alt="Perfil" className="profile-pic" />
          <div className="camera-icon">📷</div>
        </div>

  
        <ul className="menu-items">
          <li>
            <i className="fas fa-home"></i> INICIO
          </li>
          <li>
            <i className="fas fa-cog"></i> AJUSTES
          </li>
          <li>
            <i className="fas fa-key"></i> RUTAS
          </li>
          <li>
            <i className="fas fa-bell"></i> NOTIFICACIONES
          </li>
          <li>
            <i className="fas fa-lightbulb"></i> SUGERENCIAS
          </li>
          <li>
            <i className="fas fa-headset"></i> ATENCIÓN AL CLIENTE
          </li>
          <li>
            <i className="fas fa-sign-out-alt"></i> CERRAR SESIÓN
          </li>
        </ul>

  
        <div className="menu-blue-bottom"></div>
      </div>
    </>
  );
}

export default SideMenu;
