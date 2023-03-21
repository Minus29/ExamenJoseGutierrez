import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbars from './Components/Navbars';
import Detalle from './views/Detalle';
import Home from './views/Home';
import { useEffect, useState } from 'react';
import MyContext from './Components/MyContext';




function App() {
  const [pizzas, setPizzas] = useState([])

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
      <MyContext.Provider value={{pizzas}}>
        <BrowserRouter>
          <Navbars> </Navbars>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/detalle/:id' element={<Detalle></Detalle>} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
