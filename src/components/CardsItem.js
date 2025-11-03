import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/css/cards.css';


function CardItem({title, text, image, buttonText, link}) {
  return (
    <div className='col-lg-4 mt-3 ' >
      <Card className='ajuste-cards '>
        <Card.Img variant="top" src={image} alt={title}/>  
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary" href={link}> 
              {buttonText}
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardItem


//OBSERVACIONES
/*
Implementacion de PROPS
se agrego:
image, title,text, link, buttonText




IMPORTANTE ACLARACION:
el contenido de la carpeta public no se accede con rutas relativas.

*/
