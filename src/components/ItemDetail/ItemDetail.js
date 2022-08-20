import "./ItemDetail.css"
import { Link } from "react-router-dom"
import Counter from "../Counter/Counter"
import { useState, useContext } from "react"
import CartContext  from "../../context/CartContext"
import NotificationContext from "../Notification/Notification"


const ItemDetail = ({id,name,marca,price,img,imgs,description,stock}) =>{

    const {addItem } = useContext(CartContext)
    
    const {setNotification} = useContext(NotificationContext)
    
    const [quantity, setQuantity] = useState(0)

    const productosEnCarrito = (quantity) => {
        console.log(`La cantidad agregada es: ${quantity}`);
        setQuantity(quantity)

        // setQuantityAdd(quantity)

        const productToAdd = {
            id,name,quantity,price,img,stock
        }
        addItem(productToAdd)

        setNotification("Producto agregado", "correcto", "productToCart")
    }
    
    return(
            <div className="item-container container-content">
                <section className="item-images-section">
                    <div className="images">
                        <img src={img} alt={name}/>
                    </div>
                    <div className="images">
                        <img src={imgs?.img2} alt={name}/>
                    </div>
                    <div className="images">
                        <img src={imgs?.img3} alt={name}/>
                    </div>
                    <div className="images">
                        <img src={imgs?.img4} alt={name}/>
                    </div>
                </section>
                <section className="item-detail-section">
                    <div className="detail-basic">
                        <div className="item-marca">
                            <Link to={`/Tecnologia/Marca/${marca}`}>{marca}</Link>
                        </div>
                        <div className="item-name">
                            <h1>{name}</h1>
                        </div>
                    </div>
                    <div>
                        <div className="item-specifications">
                            <div className="item-specification-column">
                                <div className="item-price">
                                    <p>S/.{price}</p>
                                </div>
                                {
                                    quantity === 0 ? (
                                        <Counter stock={stock} initial={1} onAdd={productosEnCarrito} label= "Agregar al carrito"/>
                                    ) : (
                                        <div className="page-cart">
                                            <span>Agregado al Carrito</span>
                                        </div>
                                        
                                    )
                                }

                                <div className="item-description">
                                    <p>{description}</p>
                                </div>
                                <div className="availability">
                                    <div className="availability-container">
                                        <div className="availability-item type-delivery">
                                            <span>Tipo de entrega</span>
                                        </div>
                                        <div className="availability-item">
                                            <div><i className="fa-solid fa-house"></i></div>
                                            <div>
                                                <span>Despacho a domicilio</span>
                                            </div>
                                        </div>
                                        <div className="availability-item">
                                            <div><i className="fa-solid fa-shop"></i></div>
                                            <div>
                                                <span>Retiro en tienda</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            {/* <div className="item-specification-column">
                                <div className="item-caracteristicas">
                                    <div className="specifications-title">
                                        <p>Características destacadas</p>
                                    </div>
                                    <div className="specifications-list">
                                        <ul>
                                            <li>
                                                <strong>Procesador</strong> 
                                                :
                                                hola
                                            </li>
                                            <li>
                                                <strong>Modelo tarjeta de video</strong> 
                                                :
                                                hola
                                            </li>
                                            <li>
                                                <strong>Tamaño de la pantalla</strong> 
                                                :
                                                hola
                                            </li>
                                            <li>
                                                <strong>Disco duro solido</strong> 
                                                :
                                                hola
                                            </li>
                                            <li>
                                                <strong>Núcleos del procesador</strong> 
                                                :
                                                hola
                                            </li>
                                        </ul>
                                    </div>
                                    <a href="#">
                                        Ver más características
                                    </a>
                                </div> */}
                                
                            {/* </div> */}
                        </div>
                    </div>
                </section>
            </div>

    )
}
export default ItemDetail