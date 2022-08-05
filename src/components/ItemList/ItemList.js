import { useState, useEffect } from "react"
import Item from "../Item/Item"
import { productsList } from "../../asyncMock"
import "./ItemList.css"
import { useParams } from "react-router-dom"

const ItemList = () => {

    const [products, setProducts] = useState([])

    const {categoryId, marca} = useParams()


    const getProducts = ()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productsList)
            },800)    
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
        if (marca) {
            getProductsByMarca(marca)
            .then(produ => {
                setProducts(produ)
            })
        }
        else if(categoryId){
            getProductsByCategory(categoryId)
            .then(prod => {
                setProducts(prod)
            })
        }
        else if(!categoryId){
            getProducts().then(data => {
                setProducts(data)
            })
        }
    },[categoryId]);



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