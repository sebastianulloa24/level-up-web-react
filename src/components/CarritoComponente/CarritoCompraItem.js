import React from 'react';

// 1. Recibe las props como un objeto y desestructúralas
function CarritoCompraItem({ idProducto, nombreProducto, categoriaProducto, valorProducto }) {
  return (
    // 2. El componente solo retorna la fila
    <tr>
      {/* 3. se usa <td> (table data) para las celdas y llaves {} para los valores */}
      <td>{idProducto}</td>
      <td>{nombreProducto}</td>
      <td>{categoriaProducto}</td>
      {/* 4. se puede formatear el valor */}
      <td>${valorProducto.toLocaleString('es-CL')}</td>
    </tr>
  );
}

export default CarritoCompraItem;