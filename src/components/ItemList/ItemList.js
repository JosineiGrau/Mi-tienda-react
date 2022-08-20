import "./ItemList.css"
import Item from "../Item/Item"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemList = () => {

    const [products, setProducts] = useState([])
    const [loading , setLoading] = useState(false)
    const {categoryId, marca, generoProd} = useParams()
    
    console.log(categoryId);
    
    useEffect(()=>{
        setLoading(true)

        const collectionRef =   generoProd ? query(collection(db, "productsList"), where("genero", "==", generoProd)):
                                marca ? query(collection(db, "productsList"), where("marca", "==", marca )) :
                                query(collection(db, "productsList"), where("category", "==", categoryId )) 

        

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
    },[categoryId,marca,generoProd]);

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
                {products.map(({name, price, img, id, stock,genero}) => {
                    return(
                        <Item 
                        key={id}
                        name={name}
                        price={price}
                        img={img}
                        id={id}
                        genero={genero}
                        />
                    )
                    
                })}
            </div>
        </div>
    )
}
export default ItemList