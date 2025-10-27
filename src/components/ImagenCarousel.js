import React from 'react'

//Esta funcion para imagenes estaticas 
function ImagenCarousel({src,alt}) {
  return (
    <img src={src} alt={alt}/>
  );
}

export default ImagenCarousel

/*

En react tenemos dos opciones dejar la carpteta (folder) imganes en /public o /src
public: para imagenes estaticas de las cuales no se cambiaran todo el tiempo

Carpeta public/ → para imágenes estáticas o globales
💡 Cuándo usarla
Usa public cuando las imágenes:
No van a cambiar.
No las vas a importar con JavaScript (solo las usas con una ruta).
Son recursos “globales” del proyecto (logos, íconos, fondos fijos, etc.).

src: para imagenes dinamicas y varias que cambiaran constantemente segun la necesidad 
Carpeta src/assets/ → para imágenes manejadas desde el código
💡 Cuándo usarla
Usa src/assets cuando:
Importas las imágenes en un componente.
Quieres que el compilador (Webpack o Vite) las optimice.
Vas a usar import o require.
Estás trabajando con props o arrays de objetos que traen las imágenes desde JS.


*/