import { Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Counter from './components/Counter/Counter';
import Inicio from './pages/Inicio';
import Tecnologia from './pages/Tecnologia';
import PageNotFound from './pages/PageNotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='tecnologia' element={<Tecnologia/>}>
            <Route path=':categoryId' element={<Tecnologia/>}/>
          </Route>
          <Route path='tecnologia/marca/:marca' element={<Tecnologia/>}/>
          <Route path='tecnologia/detail/:productoId' element={<ItemDetailContainer/>}/>
          <Route path='/not_found' element={<PageNotFound/>}/>
          <Route path='*' element={<Navigate to="/not_found" />}/>
          {/* <Counter onAdd={productosEnCarrito} stock={10} initial={1}/> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
