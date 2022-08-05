import "./ItemListContainer.css"
import MarcaList from "../MarcaList/MarcaList"
import ItemList from "../ItemList/ItemList"
const ItemListContainer = ({greeting}) => {
    return (
        <section>
            <h1>{greeting}</h1>
            <MarcaList/>
            <ItemList/>
        </section>
        
    )
}


export default ItemListContainer