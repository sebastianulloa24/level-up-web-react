import React from 'react';
import '../styles/css/perfilusuario.css';
import PerfilItem from '../components/PerfilItem';
import imgPerfil from '../assets/imagenes/index/logo-lvlup.png';

function PerfilInfo() { 
  const dataPerfil = [
    {
      id: 1,
      imagePerfil: imgPerfil,
      nombreUsuario: "Juanin Juan jarri",
      nombre: "Sebastian",
      apellido: "pinilla",
      fecha_nacimiento: "01/01/1900",
      direccion: "Av. Siempre Viva 742", 
      comuna: "Puente alto",
      ciudad: "Santiago" 
    },  
    // {
    //   id: 2,
    //   imagePerfil: imgPerfil,
    //   nombreUsuario: "DonDiMaDom",
    //   nombre: "Alvaro",
    //   apellido: "Marin",
    //   fecha_nacimiento: "10/10/1900", 
    //   direccion: "Calle Falsa 123", 
    //   comuna: "Puente Alto",
    //   ciudad: "Santiago"
    // } 
  ];

  return (
      <div className="container">
        <div className="row justify-content-center">
          {dataPerfil.map((perfil) => (
            <div key={perfil.id} className="col-lg-4 col-md-6 mb-4">
              <PerfilItem {...perfil} />
            </div>
          ))}
        </div>
      </div>
  );
}

export default PerfilInfo;



/*
 OBSERVACIONES:
 
  <----ESTA LINEA TOMA TODO LOS DATOS QUE SE AGREGUEN DATA PERFIL 
  <PerfilItem {...perfil} />    

  <----CON ESTA LINEA LLAMAMOS LAS IMAGENES QUE OCUPAREMOS EN  ESTE CASO UNA SOLA DE PERFIL
  import imgPerfil from '../assets/imagenes/index/logo-lvlup.png';        
*/