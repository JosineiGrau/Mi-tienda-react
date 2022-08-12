import "./ItemList.css"
import Item from "../Item/Item"
import { useState, useEffect } from "react"
import { productsList } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemList = () => {

    const [products, setProducts] = useState([])
    const [loading , setLoading] = useState(false)

    const {categoryId, marca} = useParams()


    const getProducts = ()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productsList)
            },500)    
        })
    }

    const getProductsByCategory = (categoryId)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productsList.filter(prod => prod.categoria === categoryId))
            },500)
            
        })
    }

    const getProductsByMarca= (marca)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productsList.filter(prod => prod.marca === marca))
            },500)
            
        })
    }

    useEffect(()=>{
        setLoading(true)
        if (marca) {
            
            getProductsByMarca(marca)
            .then(prod => {
                setProducts(prod)
            })
            .catch( error => {
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })
        }
        else if(categoryId){
            getProductsByCategory(categoryId)
            .then(prod => {
                setProducts(prod)
            })
            .catch( error => {
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })
        }
        else if(!categoryId){
            getProducts().then(response => {
                setProducts(response)
            })
            .catch( error => {
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })
        }
    },[categoryId,marca]);

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
                {products.map(({nombre, precio, img, id, stock}) => {
                    return(
                        <Item 
                        key={id}
                        nombre={nombre}
                        precio={precio}
                        img={img}
                        id={id}
                        />
                    )
                    
                })}
            </div>
        </div>
    )
}
export default ItemList