import "./CarWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CarWidget = () => {
  const { getQuantity } = useContext(CartContext)
  const quantity = getQuantity()

  console.log(quantity);


  return (
    <Link to= "/cart-checkout" className="car">
      <i className="fa fa-cart-shopping"></i>
      <span id="contadorCarrito">{quantity}</span>
    </Link>
  );
};
export default CarWidget;
