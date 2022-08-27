import { Link } from "react-router-dom"
import "./BannerImg.css"

const BannerImg = ({img}) => {
    return(
        <section className="banner">
            <picture className="banner-img">
                <Link to="/hombre/Category/Zapatillas-Hombre"><img src={img} alt="banner"/></Link>
            </picture>
        </section>
    )
}
export default BannerImg