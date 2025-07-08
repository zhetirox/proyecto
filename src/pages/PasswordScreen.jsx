import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Importa useNavigate
import { Password } from 'primereact/password';
import '../style.css/PasswordScreen.css';

function PasswordScreen() {
  const [contraseña, setContraseña] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [tocado, setTocado] = useState(false);
  const [aceptado, setAceptado] = useState(false);
  const navigate = useNavigate(); // 👈 Inicializa navigate

  const contraseñasCoinciden = contraseña === confirmar && contraseña !== '';

  const handleContinuar = () => {
    if (contraseñasCoinciden && aceptado) {
      alert("Contraseña establecida correctamente.");
    }
  };

  const irATerminos = (e) => {
    e.preventDefault(); // 👈 Evita que el enlace recargue la página
    navigate('/terminos'); // 👈 Ruta a la que quieres navegar
  };

  return (
    <div className="password-screen">
      <div className="top-shape" />
      <h2>INGRESE SU<br />CONTRASEÑA</h2>

      <div className="password-container">
        <div className="card flex flex-column gap-3 justify-content-center">

          <Password
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            toggleMask
            placeholder="Ingrese su contraseña"
            feedback={true}
          />

          <Password
            value={confirmar}
            onChange={(e) => {
              setConfirmar(e.target.value);
              setTocado(true);
            }}
            toggleMask
            placeholder="Confirme su contraseña"
            feedback={false}
          />

          {
            !contraseñasCoinciden && tocado && (
              <small style={{ color: 'red' }}>
                Las contraseñas no coinciden.
              </small>
            )
          }

          <div style={{ marginTop: '10px', textAlign: 'left' }}>
            <label>
              <input
                type="checkbox"
                checked={aceptado}
                onChange={() => setAceptado(!aceptado)}
              />{" "}
              Acepto los <a href="" onClick={irATerminos}>términos y condiciones</a>.
            </label>
          </div>
        </div>
      </div>

      <button
        className="submit-btn"
        disabled={!contraseñasCoinciden || !aceptado}
        onClick={handleContinuar}
        style={{
          padding: '12px 28px',
          backgroundColor: (!contraseñasCoinciden || !aceptado) ? '#aaa' : '#2a7aa1',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          fontWeight: '600',
          fontSize: '16px',
          cursor: (!contraseñasCoinciden || !aceptado) ? 'not-allowed' : 'pointer',
          transition: 'background 0.3s, transform 0.2s',
          opacity: (!contraseñasCoinciden || !aceptado) ? 0.5 : 1,
          marginTop: '10px'
        }}
      >
        Continuar
      </button>

      <div className="bottom-shape" />
    </div>
  );
}

export default PasswordScreen;
