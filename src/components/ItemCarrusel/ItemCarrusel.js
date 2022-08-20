import "./ItemCarrusel.css"
import { Link } from "react-router-dom"

const ItemCarrusel = ({name, price, img, stock,id}) =>{
    return(
        <div className="carrusel-producto">
            <Link to={`/tecnologia/detail/${id}`} title={name} className="img-card"><img src= {img} alt={name} /></Link>
            <div className="producto-card">
                <div className="producto-precio">
                    <Link to={`/tecnologia/detail/${id}`} title={name}>{name}</Link>
                    <p>S/.{price}</p>
                </div>
                <span>Disponibles: {stock} Unid</span>
            </div>
        </div>
    )
}
export default ItemCarrusel