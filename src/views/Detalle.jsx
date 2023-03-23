import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import MyContext from '../Components/MyContext';

const Detalle = () => {
  const { id } = useParams();
  const { pizzas } = useContext(MyContext);

  const pizzaDetalle = pizzas.filter((p) => p.id === id);
  return (
    <div className='d-flex justify-content-center p-5'>
      <Card.Img variant="bottom" src={pizzaDetalle[0].img} style={{ width: '18rem' }} />

      <Card style={{ width: '18rem' }} id='cardDetalle'>
        <Card.Title><b>{pizzaDetalle[0].name}</b></Card.Title>
        <hr></hr>
        <Card.Text>
          {pizzaDetalle[0].desc}
        </Card.Text>

        <Card.Text>
          <b>${pizzaDetalle[0].price}</b>
        </Card.Text>
        <Card.Body id='buttons'>
          <Button variant="info" >🛒 Añadir</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Detalle