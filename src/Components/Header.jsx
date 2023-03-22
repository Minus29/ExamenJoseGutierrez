import React from 'react'
import Card from 'react-bootstrap/Card';


const Header = () => {
  return (
    <div>
      <Card className="bg-dark text-white" id='header'>
          <Card.Title id='titleheader'>¡Pizzería Mamma Mia!</Card.Title>
          <Card.Text id='titleheader'>
            ¡Tenemos las mejores pizzas que podras encontrar!
          </Card.Text>
      </Card>
    </div>
  )
}

export default Header