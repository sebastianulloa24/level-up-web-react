import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PerfilItem({ imagePerfil, nombreUsuario, nombre, apellido, fecha_nacimiento, direccion, comuna, ciudad}) {
  return (
    <div className="ajuste-card">
      <Card>
        {/* Mostrar la imagen del perfil */}
        <Card.Img variant="top" src={imagePerfil} />
        <Card.Body>
          <h6 className='text-center'>nombre de perfil</h6>
          <h5><Card.Title className='text-center'>{nombreUsuario}</Card.Title></h5>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Nombre: {nombre}</ListGroup.Item>
          <ListGroup.Item>{apellido}</ListGroup.Item>
          <ListGroup.Item>{fecha_nacimiento}</ListGroup.Item>
          <ListGroup.Item>{direccion}</ListGroup.Item>
          <ListGroup.Item>{comuna}</ListGroup.Item>
          <ListGroup.Item>{ciudad}</ListGroup.Item>
        </ListGroup>
        <Card.Body className=''>
          <Card.Link href="#">Guardar Cambios</Card.Link>
          <Card.Link href="#">Cancelar</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PerfilItem;


/* OBSERVACIONES





*/