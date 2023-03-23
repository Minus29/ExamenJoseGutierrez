import React from 'react'
import MyContext from '../Components/MyContext'
import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { calculaTotal } from '../utils/Utils';


const Carrito = () => {
    const { pizzaPedidas, totalPedido, setPizzaPedidas, setTotalPedido } = useContext(MyContext);

    const DisminuirCantidad = (id) => {
        const idx = pizzaPedidas.findIndex((p) => p.id === id);
        if (idx >= 0) {
            if (pizzaPedidas[idx].cant > 0) {
                pizzaPedidas[idx].cant -= 1;
                if (pizzaPedidas[idx].cant === 0) {
                    pizzaPedidas.splice(idx,1)
                }
                setPizzaPedidas([...pizzaPedidas]);
            }
        }
        const totalPedidoActual = calculaTotal(pizzaPedidas);
        setTotalPedido(totalPedidoActual);
    }
    const aumentarCantidad = (id) => {
        const idx = pizzaPedidas.findIndex((p) => p.id === id);
        if (idx >= 0) {
            pizzaPedidas[idx].cant += 1;
            setPizzaPedidas([...pizzaPedidas]);
        }
        const totalPedidoActual = calculaTotal(pizzaPedidas);
        setTotalPedido(totalPedidoActual);
    }

    return (
        <div id='carritox'>
            <h3 className='p-5'>Detalle del pedido</h3>
            <div className='d-flex justify-content-center'>
                <Table striped style={{ width: '80%' }} >
                    <thead>
                        <tr>
                            <th>Pizzas solicitadas</th>
                            <th>cantidad precio!</th>
                        </tr>
                    </thead>
                    {
                        pizzaPedidas.map((p, i) => {
                            return <tbody key={i}>
                                <tr>
                                    <td><img src={p.img} alt="hola" id='imgcarrito' /> {p.name}</td>
                                    <td>
                                        <button onClick={() => DisminuirCantidad(p.id)}>-</button>
                                        {p.cant}
                                        <button onClick={() => aumentarCantidad(p.id)}>+</button>
                                        ${p.price}</td>
                                </tr>
                            </tbody>
                        })
                    }
                </Table>
            </div>
            <div className='pt-5'>Total Pedido: ${totalPedido} </div>
        </div>
    )
}

export default Carrito