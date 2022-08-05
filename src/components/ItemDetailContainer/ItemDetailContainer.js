import { useState, useEffect } from "react"
import {productsList} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
const ItemDetailContainer = () => {
    const [product , setProduct] = useState()
    
    const {productoId} = useParams()
    
    
    const getProductById = (id) => {
        return new Promise ((resolve) => {
            setTimeout(()=>{
                resolve(productsList.find(prod => prod.id === id))
            },500)
        })
    }
    
    useEffect(()=>{
        getProductById(productoId)
        .then(product => {
            setProduct(product)
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])

    return(
        <section className="item-section">          
            {<ItemDetail {...product}/>}               
        </section>
    )
}

export default ItemDetailContainer