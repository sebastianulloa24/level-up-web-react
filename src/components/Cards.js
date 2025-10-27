import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cards() {
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='col-lg-4 mt-3'>
          <Card>
            <Card.Img variant="top" src="/" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ir a comprar</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-4 mt-3'>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ir a comprar</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-4 mt-3'>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ir a comprar</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-4 mt-3'>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ir a comprar</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-4 mt-3'>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ir a comprar</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-4 mt-3'>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ir a comprar</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>

  )
}

export default Cards


//OBSERVACIONES
/*

CARDS: 
venian con Style pero estamos usando columnas responsivas (col-lg-4) pero al mismo tiempo le estabamos dando un ancho fijo a las tarjetas (style={{ width: '18rem' }}).
La columna (col-lg-4) ocupa 1/3 de la pantalla, pero la tarjeta (18rem) es más pequeña que eso y, por defecto, se alinea a la izquierda dentro de la columna de nuestra pagina.


SRC:
Se aginan links de imagenes previamente estan comunicandose 



IMPORTANTE ACLARACION:
el contenido de la carpeta public no se accede con rutas relativas.

*/
