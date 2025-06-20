import React from "react";
import './App.css';

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="curve" />
        <div className="header">
            <div className="logo-container">
     
        </div>
          <button className="title-boton">Registro como conductor</button>
          <div className="dot" />
        </div>

      
        <form className="form">
          <input type="text" placeholder="Nombres" className="input" />
          <input type="text" placeholder="Apellidos" className="input" />
          <input type="tel" placeholder="Telefono" className="input" />
          <input type="email" placeholder="Correo Electronico" className="input" />
          <input type="text" placeholder="Documento" className="input" />
        </form>

        <div className="boton-container">
          <button className="continue-boton">Continuar</button>
        </div>
             <img src="C:\Users\Aprendiz\Downloads\WhatsApp Image 2025-06-19 at 19.38.05.jpeg" alt="Logo SIBU" className="logo" />

      
      </div>
    </div>
  );
}


