import React, { useContext } from 'react'
import CarBuy from '../views/CarBuy';
import MyContext from './MyContext'



const Grid = () => {
    const { pizzas } = useContext(MyContext);
    return (
        <div className="galeria grid-columns-4 p-3">
            {
                pizzas.map((pizza) => {
                    return <CarBuy pizza={pizza}></CarBuy>
                   
                })
            }
        </div>
    )
}

export default Grid