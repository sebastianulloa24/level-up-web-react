import React from 'react';
import CarritoCompraItem from './CarritoCompraItem';

function CarritoCompraList() {
    
    const carritoData = [
        {
            idProducto: 'JM001',
            nombreProducto: 'Catan',
            categoriaProducto: 'Juegos de Mesa',
            valorProducto: 29990
        },
        {
            idProducto: 'AC001',
            nombreProducto: 'Control Xbox',
            categoriaProducto: 'Accesorios',
            valorProducto: 59990
        },
    ];

    return (
        <div className="table-responsive">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Producto</th>
                        <th>Categoría</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {carritoData.map((producto) => (
                        <CarritoCompraItem key={producto.idProducto} {...producto} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CarritoCompraList;
