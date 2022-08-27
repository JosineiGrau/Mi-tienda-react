import "./ItemList.css"
import Item from "../Item/Item"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemList = ({genero}) => {

    const [products, setProducts] = useState([])
    const [loading , setLoading] = useState(false)
    const {categoryId, marca} = useParams()
    
    console.log(products);
    useEffect(()=>{
        setLoading(true)

        const collectionRef =   categoryId ? query(collection(db, "productsList"), where("category", "==", categoryId )) : marca ? query(collection(db, "productsList"), where("marca", "==", marca ))  : 
                                genero ? query(collection(db, "productsList"), where("genero", "==", genero)) : null
                                

        

        getDocs(collectionRef).then(response =>{
            console.log(response);
            const products = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(products)
        }).catch(error =>{
            console.log(error);
        })
        .finally(()=>{
            setLoading(false)
        })
    },[categoryId,marca,genero]);

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
        <div className="productos-filtros container-content">
            <div className="productos">
                {
                    products.length === 0 ? (
                        <div className="sin-productos">
                            <h2>En este momento no hay productos</h2>
                        </div>
                    ) : (
                        products.map(({name, price, img, id, stock,genero}) => {
                            return(
                                <Item 
                                key={id}
                                name={name}
                                price={price}
                                img={img}
                                id={id}
                                genero={genero}
                                stock={stock}
                                />
                            )
                            
                        })
                    )
                }
            </div>
        </div>
    )
}
export default ItemList