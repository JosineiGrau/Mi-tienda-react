import "./HeartList.css";
import { FaHeart, FaTrashAlt /*FaTimes*/ } from "react-icons/fa";
import { useContext } from "react";
import HeartContext from "../../context/HeartContext";
import { Link } from "react-router-dom";

const HeartList = ({ myCondition, myOnClick, other }) => {
  const { heart, removeItem } = useContext(HeartContext);

  if (heart.length === 0) {
    return (
      <div className={`${other || ""} ${myCondition === true && "activo"}`}>
        <div className="row-1">
          <button onClick={myOnClick} className="close-heart">
            <i className="fa-solid fa-x"></i>
          </button>
          <span className="text-heart">FAVORITOS</span>
        </div>
        <div className="row-2">
          <div className="producto-heart">
            <FaHeart size="30px" />
            <p>El corazón esta vació</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${other || ""} ${myCondition === true && "activo"}`}>
      <div className="row-1">
        <button onClick={myOnClick} className="close-heart">
          <i className="fa-solid fa-x"></i>
        </button>
        <span className="text-heart">FAVORITOS</span>
      </div>
      {
        <div className="lista">
          <div className="lista-heart">
            <div className="productos-en-heart">
              {heart.map((prod) => {
                const { img, name, price, id } = prod;
                return (
                  <div className="producto-en-heart" key={id}>
                    <img src={img} alt={name} />
                    <div className="nombre-precio">
                      <div className="nombre-producto">
                        <Link to={`/tecnologia/detail/${id}`}>{name}</Link>
                        <button onClick={() => removeItem(id)}>
                          <FaTrashAlt size="15px" />
                        </button>
                      </div>
                      <div className="precio">
                        <span>S/.{price}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default HeartList;
