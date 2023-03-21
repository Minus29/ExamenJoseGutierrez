import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const CarBuy = ({ pizza }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pizza.img} />
                <Card.Title><b>{pizza.name}</b></Card.Title>
                <Card.Text>
                    <b>Ingredientes:</b>
                </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{pizza.ingredients[0]}</ListGroup.Item>
                    <ListGroup.Item>{pizza.ingredients[1]}</ListGroup.Item>
                    <ListGroup.Item>{pizza.ingredients[2]}</ListGroup.Item>
                    <ListGroup.Item>{pizza.ingredients[3]}</ListGroup.Item>
                </ListGroup>
                <Card.Text>
                    <b>${pizza.price}</b>
                </Card.Text>
                <Card.Body>
                    <Button variant="info">Info</Button>
                    <Button variant="danger">Danger</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CarBuy