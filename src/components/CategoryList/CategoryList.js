import "./CategoryList.css";
import { Link } from "react-router-dom";

const CategoryList = ({
  genero,
  f1,
  f2,
  f3,
  f4,
  f5,
  img1,
  img2,
  img3,
  img4,
  img5,
  N1,
  N2,
  N3,
  N4,
  N5,
}) => {
  return (
    <div className="container marca-list">
      <Link to={`/${genero}/Category/${f1}`} className="category">
        <div className="marca-img">
          <img src={img1} alt={img1} />
        </div>
        <strong>{N1}</strong>
      </Link>
      <Link to={`/${genero}/Category/${f2}`} className="category">
        <div className="marca-img">
          <img src={img2} alt={img2} />
        </div>
        <strong>{N2}</strong>
      </Link>
      <Link to={`/${genero}/Category/${f3}`} className="category">
        <div className="marca-img">
          <img src={img3} alt={img3} />
        </div>
        <strong>{N3}</strong>
      </Link>
      <Link to={`/${genero}/Category/${f4}`} className="category">
        <div className="marca-img">
          <img src={img4} alt={img4} />
        </div>
        <strong>{N4}</strong>
      </Link>
      <Link to={`/${genero}/Category/${f5}`} className="category">
        <div className="marca-img">
          <img src={img5} alt={img5} />
        </div>
        <strong>{N5}</strong>
      </Link>
    </div>
  );
};
export default CategoryList;
