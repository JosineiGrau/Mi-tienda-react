import "./Item.css";
import { FaRegHeart, FaInfoCircle, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import HeartContext from "../../context/HeartContext";
import NotificationContext from "../Notification/Notification";
import { useAuth } from "../../context/AuthContext";
const Item = ({ name, price, img, id, stock, genero }) => {
  const { addItem } = useContext(HeartContext);

  const { user } = useAuth();

  const [mostrar, setMostrar] = useState(false);

  const { setNotification } = useContext(NotificationContext);

  const productosEnFavoritos = (e) => {
    e.stopPropagation();
    if (user) {
      const productToAdd = {
        id,
        name,
        price,
        img,
        stock,
      };
      addItem(productToAdd);

      if (mostrar === false) {
        setMostrar(true);
        setNotification(
          "Producto agregado a favoritos",
          "correcto",
          "productToHeart"
        );
      }

      if (mostrar) {
        setMostrar(false);
        setNotification(
          "Producto quitado de favoritos",
          "error",
          "productRemove"
        );
      }
    } else {
      setNotification(
        "Debes iniciar sesión antes de agregar a la lista",
        "error",
        "productRemove"
      );
    }
  };

  return (
    <div className="producto">
      <div className="producto-card">
        <div className="producto-precio">
          <Link to={`/${genero}/Detail/${id}`} title={name}>
            {name}
          </Link>
          <p>S/.{price}</p>
        </div>
        {stock === 0 && (
          <div className="sin-stock">
            <FaInfoCircle />
            <span>Producto sin stock</span>
          </div>
        )}
        <div className="ver-detalles">
          <Link to={`/${genero}/Detail/${id}`} title="VER DETALLES">
            VER DETALLES
          </Link>
        </div>
      </div>
      <Link to={`/${genero}/Detail/${id}`} title={name} className="img-card">
        <img loading="lazy" src={img} alt={name} />
      </Link>
      <button className="favorito" onClick={productosEnFavoritos}>
        {mostrar === true ? (
          <FaHeart size="25px" color="red" />
        ) : (
          <FaRegHeart size="25px" />
        )}
      </button>
    </div>
  );
};
export default Item;
