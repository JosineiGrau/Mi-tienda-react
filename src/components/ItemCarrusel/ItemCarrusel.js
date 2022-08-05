import "./ItemCarrusel.css"
import { Link } from "react-router-dom"

const ItemCarrusel = ({nombre, precio, img, stock,id}) =>{
    return(
        <div className="carrusel-producto">
            <Link to={`/tecnologia/detail/${id}`} title={nombre} className="img-card"><img src= {img} alt={nombre} /></Link>
            <div className="producto-card">
                <div className="producto-precio">
                    <Link to={`/tecnologia/detail/${id}`} title={nombre}>{nombre}</Link>
                    <p>S/.{precio}</p>
                </div>
                <span>Disponibles: {stock} Unid</span>
            </div>
        </div>
    )
}
export default ItemCarrusel