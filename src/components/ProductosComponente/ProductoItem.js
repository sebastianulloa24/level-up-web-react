import React from 'react'
import Card from 'react-bootstrap/Card';

function ProductoItem({image,idProducto, nombreProducto, categoriaProducto, valorProducto}) {
  return (
    <Card>
      <Card.Body>
        <Card.Img variant="top" src={image} />
        <Card.Title>codigo:{idProducto}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{nombreProducto}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{categoriaProducto}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">${valorProducto}</Card.Subtitle>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default ProductoItem