import { Link } from "react-router-dom"
import { useContext, useRef } from "react"
import HeartContext from "../../context/HeartContext"
import "./Item.css"
import NotificationContext from "../Notification/Notification"
const Item = ({name, price, img, id, stock,genero}) =>{

    const {addItem} = useContext(HeartContext)

    const corazon = useRef()


    const { setNotification } = useContext(NotificationContext)

    const productosEnFavoritos = (e) => {
        e.stopPropagation()

        const productToAdd = {
            id,name,price,img,stock
        }

        addItem(productToAdd)

        setNotification("Producto agregado a favoritos","correcto", "productToHeart")
    }

    return(
        <div className="producto">
            <div className="producto-card">
                <div className="producto-precio">
                    <Link to={`/${genero}/Detail/${id}`} title={name}>{name}</Link>
                    <p>S/.{price}</p>
                </div>
                {
                    stock === 0  && <div className="sin-stock">
                                        <i class="fa-solid fa-circle-info"></i>
                                        <span>Producto sin stock</span>
                                    </div>
                }
                <div className="ver-detalles">
                    <Link to={`/${genero}/Detail/${id}`} title="VER DETALLES">VER DETALLES</Link>
                </div>
            </div>
            <Link to={`/${genero}/Detail/${id}`} title={name} className="img-card"><img loading="lazy" src= {img} alt={name} /></Link>
            <button className="favorito" onClick={productosEnFavoritos} ref={corazon}>
                <i className="fa fa-heart"></i>
            </button>
        </div>
    )
}
export default Item