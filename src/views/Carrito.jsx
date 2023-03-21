import React from 'react'
import MyContext from '../Components/MyContext'
import { useContext } from 'react';

const Carrito = () => {
    const { pizzaPedidas, totalPedido } = useContext(MyContext);

    return (
        <div>
            <h3>Detalle del pedido</h3>
            <div>
                {
                    pizzaPedidas.map((p) => {
                        return <div>
                            <div>{p.name}</div>
                            <div>{p.price}</div>
                            <div>{p.cant}</div>
                        </div>
                    })
                }
                <div>Total Pedido:${totalPedido} </div>
            </div>
        </div>
    )
}

export default Carrito