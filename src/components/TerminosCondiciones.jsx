import React from 'react';
import '../style.css/TerminosCondiciones.css'; 

function TerminosCondiciones() {
  return (
    <div className="terminos-container">
      <h1>Términos y Condiciones</h1>

      <p>Última actualización: Julio 2025</p>

      <section>
        <h2>1. Aceptación de los términos</h2>
        <p>
          Al usar este sitio web o aplicación, aceptas cumplir con estos términos
          y condiciones en su totalidad. Si no estás de acuerdo con alguno de ellos,
          no debes usar nuestros servicios.
        </p>
      </section>

      <section>
        <h2>2. Uso del servicio</h2>
        <p>
          El usuario se compromete a utilizar este servicio de manera lícita y respetuosa.
          Queda prohibido su uso para actividades fraudulentas o que infrinjan la ley.
        </p>
      </section>

      <section>
        <h2>3. Privacidad</h2>
        <p>
          Nos comprometemos a proteger tu información personal. Consulta nuestra política
          de privacidad para más detalles sobre cómo recopilamos y usamos tus datos.
        </p>
      </section>

      <section>
        <h2>4. Cambios en los términos</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos en cualquier momento.
          Se notificará a los usuarios sobre cualquier cambio importante.
        </p>
      </section>

      <section>
        <h2>5. Contacto</h2>
        <p>
          Si tienes preguntas sobre estos términos, puedes escribirnos a:
          <a href="mailto:soporte@tuservicio.com"> soporte@tuservicio.com</a>.
        </p>
      </section>

      <br />
      <a href="/" className="volver-btn">Volver</a>
    </div>
  );
}

export default TerminosCondiciones;
