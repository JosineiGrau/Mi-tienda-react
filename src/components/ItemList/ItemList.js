import { useState, useEffect } from "react"
import Item from "../Item/Item"
import { productsList } from "../../asyncMock"
import "./ItemList.css"

const ItemList = () => {

    const [products, setProducts] = useState([])

    const getProducts = ()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productsList)
            }, 3000)
            
        })
    }

    const getProductsFromBack = async () => {
        try{
            const data = await getProducts()
            setProducts(data)
        }
        catch(error){
            console.log(error);
        }
        finally{
            const preloader = document.getElementById("preloader")
            preloader.innerHTML= ""
        }
    }

    useEffect(()=>{
        getProductsFromBack()
    },[]);



    return(
        <div className="productos-filtros">
            <div className="preloader" id="preloader">
                    <div className="carga"></div>
            </div>
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