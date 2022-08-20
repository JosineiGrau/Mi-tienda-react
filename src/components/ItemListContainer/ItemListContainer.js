import "./ItemListContainer.css"
import CategoryList from "../CategoryList/CategoryList"
import ItemList from "../ItemList/ItemList"
const ItemListContainer = ({greeting}) => {
    return (
        <section>
            <h1>{greeting}</h1>
            <CategoryList/>
            <ItemList/>
        </section>
        
    )
}


export default ItemListContainer