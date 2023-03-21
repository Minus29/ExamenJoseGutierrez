import React, { useContext } from 'react'
import CarBuy from '../views/CarBuy';
import MyContext from './MyContext'
import { Row, Col } from 'react-bootstrap'




const Grid = () => {
    const { pizzas } = useContext(MyContext);
    return (
        <>
            <Row>
                {
                    pizzas.map((pizza) => {
                        return <Col key={pizza.id}><CarBuy pizza={pizza}></CarBuy></Col>
                    })
                }
            </Row>
        </>
    )
}

export default Grid