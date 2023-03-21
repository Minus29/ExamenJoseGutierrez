import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbars from './Components/Navbars';
import Detalle from './views/Detalle';
import Home from './views/Home';
import { useEffect, useState } from 'react';
import MyContext from './Components/MyContext';
import Carrito from './views/Carrito';




function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaPedidas, setPizzaPedidas] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);

  const getPizzas = async () => {
    const res = await fetch(`http://localhost:3000/pizzas.json`)
    const data = await res.json();
    setPizzas(data);
  }

  useEffect(() => {
    getPizzas()

  }, [])


  return (
    <div className="App">
      <MyContext.Provider value={{pizzas, pizzaPedidas, setPizzaPedidas, setTotalPedido, totalPedido}}>
        <BrowserRouter>
          <Navbars> </Navbars>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/carrito' element={<Carrito></Carrito>} />
            <Route path='/detalle/:id' element={<Detalle></Detalle>} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
