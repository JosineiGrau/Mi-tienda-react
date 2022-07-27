import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {

  const productosEnCarrito = (quantity) => {
    console.log(`La cantidad agregada es: ${quantity}`);
  }

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting= "Nuestros Productos"/>
      <Counter onAdd={productosEnCarrito} stock={10} initial={1}/>
    </>
  );
}

export default App;
