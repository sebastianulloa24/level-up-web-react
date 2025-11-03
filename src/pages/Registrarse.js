import React from 'react';
import fondo from '../../src/backgrounds/gif-fondo-paisaje.gif'

function Registrarse() {
  return (
    // Usamos un div contenedor para el fondo y centrado
    <div style={{
      backgroundImage: `url(${fondo})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      paddingTop: '80px'
    }}>

      REGISTRARSE
    </div>
  );
}

export default Registrarse;
