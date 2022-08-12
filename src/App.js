import { Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Inicio from './pages/Inicio';
import Tecnologia from './pages/Tecnologia';
import PageNotFound from './pages/PageNotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import PageCart from './pages/Cart/PageCart';
import { CartContextProvider } from "./context/CartContext"




function App() {
  return (
    <>
    <CartContextProvider>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='tecnologia' element={<Tecnologia/>}>
            <Route path=':categoryId' element={<Tecnologia/>}/>
          </Route>
          <Route path='tecnologia/marca/:marca' element={<Tecnologia/>}/>
          <Route path='tecnologia/detail/:productoId' element={<ItemDetailContainer/>}/>
          <Route path='not_found' element={<PageNotFound/>}/>
          <Route path='*' element={<Navigate to="not_found" />}/>
          <Route path='cart-checkout' element={<PageCart/>}/>
      </Routes>
      <Footer/>
    </CartContextProvider>
    </>
  );
}

export default App;
