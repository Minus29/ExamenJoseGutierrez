import React from 'react'
import MyContext from '../Components/MyContext'
import { useContext } from 'react';

const Carrito = () => {
    const { pizzaPedidas } = useContext(MyContext);

    return (
        <div>
            <h3>Detalle del pedido</h3>
            <div>
                {
                    pizzaPedidas.map((p) => {
                        return <div>
                            <div>{p.id}</div>
                            <div>{p.cant}</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Carrito