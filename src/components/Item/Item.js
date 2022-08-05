import { Link } from "react-router-dom"
import "./Item.css"
const Item = ({nombre, precio, img, id, stock}) =>{
    return(
        <div className="producto">
            <div className="producto-card">
                <div className="producto-precio">
                    <Link to={`/tecnologia/detail/${id}`} title={nombre}>{nombre}</Link>
                    <p>S/.{precio}</p>
                </div>
                <div className="ver-detalles">
                    <Link to={`/tecnologia/detail/${id}`} title="VER DETALLES">VER DETALLES</Link>
                </div>
            </div>
            <Link to={`/tecnologia/detail/${id}`} title={nombre} className="img-card"><img src= {img} alt={nombre} /></Link>
            <button className="favorito">
                <i className="fa fa-heart"></i>
            </button>
        </div>
    )
}
export default Item