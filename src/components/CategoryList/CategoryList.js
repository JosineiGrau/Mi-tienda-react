import "./CategoryList.css"
import { Link } from "react-router-dom"

const CategoryList = ({genero,f1,f2,f3,f4,f5,img1,img2,img3,img4,img5,N1,N2,N3,N4,N5}) => {
    return(
        <div className="container marca-list">
            <div className="category">
                <Link to={`/${genero}/Category/${f1}`} className="marca-img">
                    <img src={img1} alt={img1}/>
                </Link>
                <strong>{N1}</strong>
            </div>
            <div className="category">
                <Link to={`/${genero}/Category/${f2}`} className="marca-img">
                    <img src={img2} alt={img2}/>
                </Link>
                <strong>{N2}</strong>
            </div>
            <div className="category">
                <Link to={`/${genero}/Category/${f3}`} className="marca-img">
                    <img src={img3} alt={img3}/>
                </Link>
                <strong>{N3}</strong>
            </div>
            <div className="category">
                <Link to={`/${genero}/Category/${f4}`} className="marca-img">
                    <img src={img4} alt={img4}/>
                </Link>
                <strong>{N4}</strong>
            </div>
            <div className="category">
                <Link to={`/${genero}/Category/${f5}`} className="marca-img">
                    <img src={img5} alt={img5}/>
                </Link>
                <strong>{N5}</strong>
            </div>
        </div>
    )
}
export default CategoryList