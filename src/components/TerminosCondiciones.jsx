import React, { useState } from 'react';

function TerminosCondiciones() {
  const [aceptado, setAceptado] = useState(false);

  const handleContinuar = () => {
    alert("Términos aceptados, puedes continuar.");
  };

  return (
    <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
      <h4> Términos y condiciones</h4>
      <p style={{ fontSize: '14px' }}>
        Al continuar, aceptas los términos y condiciones del servicio.
      </p>

      <label>
        <input
          type="checkbox"
          checked={aceptado}
          onChange={() => setAceptado(!aceptado)}
        />{" "}
        Acepto los términos
      </label>

      <br /><br />

      <button
        onClick={handleContinuar}
        disabled={!aceptado}
        style={{
          padding: '8px 20px',
          backgroundColor: aceptado ? '#2a7aa1' : '#aaa',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          cursor: aceptado ? 'pointer' : 'not-allowed'
        }}
      >
        Continuar
      </button>
    </div>
  );
}

export default TerminosCondiciones;
