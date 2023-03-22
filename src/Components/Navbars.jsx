import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import MyContext from './MyContext';

const Navbars = () => {
  const { totalPedido } = useContext(MyContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" id='nav'>
        <Container>
          <NavLink id='navtext'
            className={({ isActive }) => (isActive ? "viewActiva" : "view")}
            to="/" >
            🍕Pizzeria Mamma Mia!
          </NavLink>
          <Nav>
            <NavLink  id='navtext2'
              className={({ isActive }) => (isActive ? "viewActiva" : "view")}
              to="/carrito" >
              🛒 ${totalPedido}
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars