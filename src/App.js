import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import { CartContextProvider } from "./context/CartContext"
import { NotificationProvider } from "./components/Notification/Notification"
import { HeartProvider } from "./context/HeartContext"
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

import NavBar from './components/NavBar/NavBar';
import Inicio from './pages/Inicio';
import Tecnologia from './pages/Tecnologia';
import PageNotFound from './pages/PageNotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Hombre from './pages/Hombre';
import Mujer from './pages/Mujer';
import Niño from './pages/Niño';
import PageCartCheckout from './pages/PageCartCheckout/PageCartCheckout';
import ResetPassword from './pages/resetPassword/Resetpassword';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <CartContextProvider>
          <HeartProvider>
            <NavBar/>
            <Routes>

                <Route path='/' element={<Inicio/>}/>

                <Route path='Hombre' element ={<Hombre greeting={"Hombre"}/>}>
                  <Route path='Category/:categoryId' element={<Hombre greeting={"Hombre"}/>}/>
                  <Route path='Marca/:marca' element={<Hombre greeting={"Hombre"}/>}/>
                </Route>

                <Route path='Mujer' element ={<Mujer greeting={"Mujer"}/>}>
                  <Route path='Category/:categoryId' element={<Mujer greeting={"Mujer"}/>}/>
                  <Route path='Marca/:marca' element={<Mujer greeting={"Mujer"}/>}/>
                </Route>

                <Route path='Niño' element ={<Niño greeting={"Niño(a)"}/>}>
                  <Route path='Marca/:marca' element={<Niño greeting={"Niño(a)"}/>}/>
                </Route>

                <Route path='Tecnologia' element={<Tecnologia greeting={"Tecnologia"}/>}>
                  <Route path='Category/:categoryId' element={<Tecnologia greeting={"Tecnologia"}/>}/>
                  <Route path='Marca/:marca' element={<Tecnologia greeting={"Tecnologia"}/>}/>
                </Route>

                <Route path=':genero/Detail/:productoId' element={<ItemDetailContainer/>}/>

                <Route path='not_found' element={<PageNotFound/>}/>
                <Route path='*' element={<Navigate to="not_found" />}/>

                <Route path='register' element={<Register/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='reset-password' element={<ResetPassword/>}/>
                <Route path='cart-checkout' element={<PageCartCheckout/>}/>
                <Route path='checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>} />

            </Routes>
            <Footer/>
          </HeartProvider>
        </CartContextProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
