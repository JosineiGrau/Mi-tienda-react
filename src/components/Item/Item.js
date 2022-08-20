import { Link } from "react-router-dom"
import { useContext, useRef } from "react"
import HeartContext from "../../context/HeartContext"
import "./Item.css"
const Item = ({name, price, img, id, stock,genero}) =>{

    const {addItem} = useContext(HeartContext)
    const corazon = useRef()
    console.log(addItem);

    const productosEnFavoritos = (e) => {
        e.stopPropagation()

        // corazon.current.style.color = "red"
        // corazon.current.style.display = "block"
        

        const productToAdd = {
            id,name,price,img,stock
        }

        addItem(productToAdd)
    }

    return(
        <div className="producto">
            <div className="producto-card">
                <div className="producto-precio">
                    <Link to={`/${genero}/Detail/${id}`} title={name}>{name}</Link>
                    <p>S/.{price}</p>
                </div>
                <div className="ver-detalles">
                    <Link to={`/${genero}/Detail/${id}`} title="VER DETALLES">VER DETALLES</Link>
                </div>
            </div>
            <Link to={`/${genero}/Detail/${id}`} title={name} className="img-card"><img src= {img} alt={name} /></Link>
            <button className="favorito" onClick={productosEnFavoritos} ref={corazon}>
                <i className="fa fa-heart"></i>
            </button>
        </div>
    )
}
export default Item