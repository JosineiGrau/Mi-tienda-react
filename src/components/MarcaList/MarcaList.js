import "./MarcaList.css"
import { Link } from "react-router-dom"

const MarcaList = () => {
    return(
        <div className="container marca-list">
            <Link to="/tecnologia/Celular" className="celulares marca-img">
                <strong>Celulares</strong>
            </Link>
            <Link to="/tecnologia/Tablet" className="tablets marca-img">
                <strong>Tablets</strong>
            </Link>
            <Link to="/tecnologia/Laptop" className="laptos marca-img">
                <strong>Laptops</strong>
            </Link>
            <Link to="/tecnologia/Televisor" className="televisores marca-img">
                <strong>Televisores</strong>
            </Link>
            <Link to="/tecnologia/Reloj" className="smartwatch marca-img">
                <strong>Smartwatch</strong>
            </Link>
        </div>
    )
}
export default MarcaList