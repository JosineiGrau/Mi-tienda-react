import { useState, useEffect } from "react"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
const ItemDetailContainer = () => {
    const [product , setProduct] = useState()
    const [loading , setLoading] = useState(false)
    const {productoId} = useParams()
    
    
    useEffect(()=>{
        setLoading(true)
        getDoc(doc(db, "productsList", productoId)).then(response => {
            const data = response.data()
            const productAdapted = {id : response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error=>{
            console.log(error);
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [productoId])

    if(loading){
        return (
            <div className="preloader">
                <div className="preloader-content">
                    <div className="carga"></div>
                </div>
            </div>
        )
    }
    return(
        <section className="item-section">          
            {<ItemDetail {...product}/>}               
        </section>
    )
}

export default ItemDetailContainer