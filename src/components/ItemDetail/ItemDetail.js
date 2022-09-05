import "./ItemDetail.css";
import { FaStoreAlt, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import NotificationContext from "../Notification/Notification";

const ItemDetail = ({
  id,
  name,
  marca,
  price,
  img,
  imgs,
  description,
  stock,
  genero,
}) => {
  const { addItem } = useContext(CartContext);

  const { setNotification } = useContext(NotificationContext);

  const [quantity, setQuantity] = useState(0);

  const productosEnCarrito = (quantity) => {
    setQuantity(quantity);

    const productToAdd = {
      id,
      name,
      quantity,
      price,
      img,
      stock,
    };
    addItem(productToAdd);

    setNotification(
      "Producto agregado al carrito",
      "correcto",
      "productToCart"
    );
  };

  return (
    <div className="item-container container-content">
      <section className="item-images-section">
        <div className="images">
          <img loading="lazy" src={img} alt={name} />
        </div>
        <div className="images">
          <img loading="lazy" src={imgs?.img2} alt={name} />
        </div>
        <div className="images">
          <img loading="lazy" src={imgs?.img3} alt={name} />
        </div>
        <div className="images">
          <img loading="lazy" src={imgs?.img4} alt={name} />
        </div>
      </section>
      <section className="item-detail-section">
        <div className="detail-basic">
          <div className="item-marca">
            <Link to={`/${genero}/Marca/${marca}`}>{marca}</Link>
          </div>
          <div className="item-name">
            <h1>{name}</h1>
          </div>
        </div>
        <div>
          <div className="item-specifications">
            <div className="item-specification-column">
              <div className="item-price">
                <p>S/.{price}</p>
              </div>
              {stock === 0 ? (
                <div className="sin-stock">
                  <i className="fa-solid fa-circle-info"></i>
                  <span>Producto sin stock</span>
                </div>
              ) : quantity === 0 ? (
                <Counter
                  stock={stock}
                  initial={1}
                  onAdd={productosEnCarrito}
                  label="Agregar al carrito"
                />
              ) : (
                <div className="page-cart">
                  <span>Agregado al Carrito</span>
                </div>
              )}

              <div className="item-description">
                <p>{description}</p>
              </div>
              <div className="availability">
                <div className="availability-container">
                  <div className="availability-item type-delivery">
                    <span>Tipo de entrega</span>
                  </div>
                  <div className="availability-item">
                    <div>
                      <FaHome size="15px" />
                    </div>
                    <div>
                      <span>Despacho a domicilio</span>
                    </div>
                  </div>
                  <div className="availability-item">
                    <div>
                      <FaStoreAlt size="15px" />
                    </div>
                    <div>
                      <span>Retiro en tienda</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ItemDetail;
