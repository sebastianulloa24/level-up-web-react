import React from 'react'

//Esta funcion para imagenes estaticas 
function ImagenCarousel() {
  return (
    <img src='' alt=''/>
  );
}

export default ImagenCarousel

//en react tenemos dos opciones dejar la carpteta (folder) imganes en /public o /src

// /public: para imagenes estaticas de las cuales no se cambiaran todo el tiempo
// /src: para imagenes dinamicas y varias que cambiaran constantemente segun la necesidad 


// function ImagenCarousel({src,alt}) {
//   return (
//     <img src={src} alt={alt}/>
//   );
// }