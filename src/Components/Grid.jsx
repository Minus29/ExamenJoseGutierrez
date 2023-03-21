import React, { useContext } from 'react'
import CarBuy from '../views/CarBuy';
import MyContext from './MyContext'
import { Row, Col } from 'react-bootstrap'




const Grid = () => {
    const { pizzas } = useContext(MyContext);
    return (
        <div className="galeria grid-columns-4 p-3">
            <Row>
                {
                    pizzas.map((pizza) => {
                        return <Col key={pizza.id}><CarBuy pizza={pizza}></CarBuy></Col>
                    })
                }
            </Row>
        </div>
    )
}

export default Grid