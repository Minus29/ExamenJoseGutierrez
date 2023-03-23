import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import MyContext from '../Components/MyContext';


const CarBuy = ({ pizza }) => {
    const navigate = useNavigate();
    const { pizzaPedidas, setPizzaPedidas, setTotalPedido, totalPedido } = useContext(MyContext);

    const agregarPizza = (id) => {
        const idx = pizzaPedidas.findIndex((p) => p.id === id);
        if (idx >= 0) {
            pizzaPedidas[idx].cant += 1;
            setPizzaPedidas([...pizzaPedidas]);
        } else {
            const pizzaSeleccionada = { id: pizza.id, name: pizza.name, price: pizza.price, img: pizza.img, cant: 1 };
            setPizzaPedidas([...pizzaPedidas, pizzaSeleccionada]);
        }
        setTotalPedido(totalPedido + pizza.price);
    }

    const verDetalle = () => {
        navigate(`/detalle/${pizza.id}`)
    }
    return (
        <div>
            <Card style={{ width: '18rem' }} id="card">
                <Card.Img variant="top" src={pizza.img} />
                <Card.Title><b>{pizza.name}</b></Card.Title>
                <hr></hr>
                <Card.Text>
                    <b>Ingredientes:</b>
                </Card.Text>
                <ListGroup variant="flush" className='list'>
                    <ListGroup.Item>🍕{pizza.ingredients[0]}</ListGroup.Item>
                    <ListGroup.Item>🍕{pizza.ingredients[1]}</ListGroup.Item>
                    <ListGroup.Item>🍕{pizza.ingredients[2]}</ListGroup.Item>
                    <ListGroup.Item>🍕{pizza.ingredients[3]}</ListGroup.Item>
                </ListGroup>
                <Card.Text>
                    <b>${pizza.price}</b>
                </Card.Text>
                <Card.Body id='buttons'>
                    <Button variant="info" onClick={() => agregarPizza(pizza)}>🛒 Añadir</Button>
                    <Button variant="danger" onClick={() => verDetalle()}>👀 Ver mas</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CarBuy