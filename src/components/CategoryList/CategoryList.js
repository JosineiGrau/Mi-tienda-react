import "./CategoryList.css"
import { Link } from "react-router-dom"

const CategoryList = () => {
    return(
        <div className="container marca-list">
            <Link to="/Tecnologia/Category/Celular" className="celulares marca-img">
                <strong>Celulares</strong>
            </Link>
            <Link to="/Tecnologia/Category/Tablet" className="tablets marca-img">
                <strong>Tablets</strong>
            </Link>
            <Link to="/Tecnologia/Category/Laptop" className="laptos marca-img">
                <strong>Laptops</strong>
            </Link>
            <Link to="/Tecnologia/Category/Televisor" className="televisores marca-img">
                <strong>Televisores</strong>
            </Link>
            <Link to="/Tecnologia/Category/Reloj" className="smartwatch marca-img">
                <strong>Smartwatch</strong>
            </Link>
        </div>
    )
}
export default CategoryList