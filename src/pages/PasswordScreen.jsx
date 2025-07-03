import React, { useState } from 'react';
import { Password } from 'primereact/password';
import '../style.css/PasswordScreen.css';

function PasswordScreen() {
  const [confirmar, setConfirmar] = useState('');
    const [contraseña, setContraseña] = useState('');

  return (
    <div className="password-screen">
      <div className="top-shape" />
      <h2>INGRESE SU<br />CONTRASEÑA</h2>

      <div className="password-container">
                <div className="card flex justify-content-center">
            <Password value={confirmar} onChange={(e) => setConfirmar(e.target.value)} toggleMask placeholder="Ingrese su contraseña"  />
            <Password value={contraseña} onChange={(e) => setContraseña(e.target.value)} toggleMask placeholder="Confirme su contraseña"  />
        </div>
      </div>

      <button className="submit-btn"> Continuar</button>
      <div className="bottom-shape" />
    </div>
  );
}

export default PasswordScreen;
