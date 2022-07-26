import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const CartList = ({ myOnClick, myCondition, other, mySetFn }) => {
  const { cart, removeItem, getPrice, aumentar, descontar } =
    useContext(CartContext);

  const PrecioTotal = getPrice();

  const navigate = useNavigate();

  const handleClick = () => {
    mySetFn(false);
    navigate("/cart-checkout");
  };

  if (cart.length === 0) {
    return (
      <div className={`${other || ""} ${myCondition === true && "activo"}`}>
        <div className="row-1">
          <button onClick={myOnClick} className="close-car">
            <i className="fa-solid fa-x"></i>
          </button>
          <span className="textCarrito">CARRITO</span>
        </div>
        <div className="row-2">
          <div className="producto-carrito">
            <FaShoppingCart size="30px" />
            <p>El carrito esta vació</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${other || ""} ${myCondition === true && "activo"}`}>
      <div className="row-1">
        <button onClick={myOnClick} className="close-car">
          <i className="fa-solid fa-x"></i>
        </button>
        <span className="textCarrito">CARRITO</span>
      </div>
      {
        <div className="lista-y-comprar">
          <div className="lista-carrito">
            <div className="productos-en-carrito">
              {cart.map((prod) => {
                const { img, name, price, quantity, id, stock } = prod;
                return (
                  <div className="producto-en-carrito" key={id}>
                    <img src={img} alt={name} />
                    <div className="filtro-nombre-precio">
                      <div className="nombre-producto">
                        <div onClick={myOnClick}>
                          <Link to={`/tecnologia/detail/${id}`}>{name}</Link>
                        </div>
                        <button onClick={() => removeItem(id)}>
                          <FaTrashAlt size="15px" />
                        </button>
                      </div>
                      <div className="filtro-precio">
                        <div className="cantidad">
                          <button
                            onClick={() => descontar(id)}
                            disabled={quantity === 1 ? true : null}
                          >
                            {" "}
                            -{" "}
                          </button>
                          <span className="numeroCantidad">{quantity}</span>
                          <button
                            onClick={() => aumentar(id)}
                            disabled={quantity === stock ? true : null}
                          >
                            {" "}
                            +{" "}
                          </button>
                        </div>
                        <span>S/.{quantity * price}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="comprar-ahora" id="comprar-ahora">
            <div className="precioTotal">
              <p>
                Precio Total: S/.<span>{PrecioTotal}</span>
              </p>
            </div>
            <p>Simula el costo de envío en el siguiente paso.</p>
            <div className="comprar" onClick={handleClick}>
              <button>COMPRAR AHORA</button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default CartList;
