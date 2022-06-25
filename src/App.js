
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';
import Detalle from './pages/Detalle';
import ProductList from './pages/ProductList';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';


function App() {
  

  return (
    <>
    <div className="App">
    <CartProvider>
      <BrowserRouter> 
        <NavBar />
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contacto />} />
          <Route path='/product/:id' element={<Detalle />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>   
        
     
     
      
    </div>
   
    </>
  );
}

export default App;
