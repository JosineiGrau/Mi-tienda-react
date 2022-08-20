import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import { CartContextProvider } from "./context/CartContext"
import { NotificationProvider } from "./components/Notification/Notification"
import { HeartProvider } from "./context/HeartContext"
import { AuthProvider } from './context/AuthContext';
// import { ProtectedRoute } from './components/ProtectedRoute';

import NavBar from './components/NavBar/NavBar';
import Inicio from './pages/Inicio';
import Tecnologia from './pages/Tecnologia';
import PageNotFound from './pages/PageNotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Hombre from './pages/Hombre';
import PageCart from './pages/Cart/PageCart';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <CartContextProvider>
          <HeartProvider>
            <NavBar/>
            <Routes>

                <Route path='/' element={<Inicio/>}/>

                <Route path='Hombre' element ={<Hombre/>}>
                  <Route path=':generoProd' element={<Hombre/>}/>
                  <Route path='marca/:marca' element={<Hombre/>}/>
                </Route>


                <Route path='Tecnologia' element={<Tecnologia/>}>
                  <Route path=':generoProd' element={<Tecnologia/>}/>
                  <Route path='Category/:categoryId' element={<Tecnologia/>}/>
                  <Route path='Marca/:marca' element={<Tecnologia/>}/>
                </Route>

                <Route path=':genero/Detail/:productoId' element={<ItemDetailContainer/>}/>

                <Route path='not_found' element={<PageNotFound/>}/>
                <Route path='*' element={<Navigate to="not_found" />}/>

                <Route path='register' element={<Register/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='cart-checkout' element={<PageCart/>}/>
            </Routes>
            <Footer/>
          </HeartProvider>
        </CartContextProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
