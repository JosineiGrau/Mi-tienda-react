import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
const ItemListContainer = ({greeting}) => {
    return (
        <section>
            <h1>{greeting}</h1>
            <ItemList/>
        </section>
        
    )
}


export default ItemListContainer