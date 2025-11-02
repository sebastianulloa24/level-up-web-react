import React from 'react';
import fondo from '../backgrounds/gif-fondo-paisaje.gif';
import '../styles/css/perfilusuario.css';
import PerfilInfo from '../components/PerfilInfo';

function Perfil() {
  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        paddingTop: '80px'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
              <PerfilInfo/>
            </div>
        </div>
      </div>
  );
}

export default Perfil;


//OBSERVACION

/*
    ItemPerfil:
        Contiene el card de reactBootstrap con dos tpos
*/