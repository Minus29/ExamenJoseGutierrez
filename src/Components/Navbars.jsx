import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Navbars = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" id='nav'>
        <Container>
          <NavLink
            className={({ isActive }) => (isActive ? "viewActiva" : "view")}
            to="/" >
            🍕Pizzeria Mamma Mia!
          </NavLink>
          <Nav>
            <NavLink
              className={({ isActive }) => (isActive ? "viewActiva" : "view")}
              to="/carrito" >
              🛒
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars